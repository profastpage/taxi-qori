// Service Worker para QORI PWA - Actualización automática en Desktop y Móvil
const CACHE_NAME = 'qori-v5-desktop';
const CACHE_VERSION = '5.0.0';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-512.svg'
];

// Install event - cachea recursos críticos
self.addEventListener('install', event => {
  console.log('[SW v' + CACHE_VERSION + '] Instalando nueva versión');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando recursos críticos');
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, { cache: 'reload' });
        })).catch(err => {
          console.log('[SW] Algunos recursos no se cachearon:', err);
          // No fallar la instalación si algunos recursos fallan
        });
      })
      .then(() => {
        console.log('[SW] Forzando activación inmediata');
        return self.skipWaiting();
      })
  );
});

// Activate event - limpia caches viejos y toma control inmediato
self.addEventListener('activate', event => {
  console.log('[SW v' + CACHE_VERSION + '] Activando');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('qori-')) {
            console.log('[SW] Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[SW] Tomando control de todos los clientes');
      return self.clients.claim();
    })
    .then(() => {
      // Notificar a todos los clientes que hay nueva versión
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            version: CACHE_VERSION
          });
        });
      });
    })
  );
});

// Fetch event - Network first con fallback a cache
self.addEventListener('fetch', event => {
  // Solo manejar peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  
  // Ignorar peticiones de otros orígenes (analytics, fonts, etc)
  if (requestUrl.origin !== location.origin) {
    return;
  }

  // Para navegación HTML (páginas)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Intentar obtener de la red primero con cache-busting
          const networkResponse = await fetch(event.request, {
            cache: 'no-cache',
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          
          // Si la red funciona, actualizar cache en segundo plano
          const responseClone = networkResponse.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, responseClone);
          
          console.log('[SW] HTML actualizado desde red:', requestUrl.pathname);
          return networkResponse;
        } catch (error) {
          console.log('[SW] Sin conexión, usando fallback de cache');
          // Fallback a cache si no hay red
          const cachedResponse = await caches.match(event.request);
          return cachedResponse || caches.match('/index.html');
        }
      })()
    );
    return;
  }

  // Para recursos estáticos (CSS, JS, imágenes): cache primero, luego red
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // Devolver cache inmediatamente y actualizar en segundo plano
        fetch(event.request, { cache: 'no-cache' }).then(async networkResponse => {
          if (networkResponse && networkResponse.ok) {
            await cache.put(event.request, networkResponse.clone());
          }
        }).catch(() => {}); // Ignorar errores de red
        
        return cachedResponse;
      }

      // Si no hay cache, ir a red
      try {
        const networkResponse = await fetch(event.request);
        // Cachea para próxima vez
        if (networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        console.log('[SW] Recurso no disponible:', event.request.url);
        return new Response('Recurso no disponible', { status: 404 });
      }
    })()
  );
});

// Manejar mensaje para saltar espera (desde el cliente)
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    console.log('[SW] Recibido skipWaiting, activando inmediatamente');
    self.skipWaiting();
  }
  if (event.data && event.data.action === 'claimClients') {
    console.log('[SW] Recibido claimClients');
    self.clients.claim();
  }
});

// Manejar mensajes de los clientes
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});
