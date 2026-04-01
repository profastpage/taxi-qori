// Service Worker para QORI PWA - Actualización inmediata en móviles
const CACHE_NAME = 'qori-v4'; // Nueva versión para forzar reinstalación
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cachea recursos críticos
self.addEventListener('install', event => {
  console.log('[SW] Instalando nueva versión del Service Worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando recursos críticos');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Forzando activación inmediata');
        self.skipWaiting();
      })
  );
});

// Activate event - limpia caches viejos y toma control inmediato
self.addEventListener('activate', event => {
  console.log('[SW] Activando nueva versión');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
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
  );
});

// Fetch event - Network first con fallback a cache
self.addEventListener('fetch', event => {
  // Solo manejar peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  
  // Para navegación HTML (páginas)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Intentar obtener de la red primero
          const networkResponse = await fetch(event.request);
          
          // Clonar y actualizar cache en segundo plano
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
        // Devolver cache inmediatamente
        fetch(event.request).then(async networkResponse => {
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
