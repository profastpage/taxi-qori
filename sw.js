// Service Worker para QORI PWA - Actualización inmediata en móviles
const CACHE_NAME = 'qori-v3'; // Incrementado para forzar nueva instalación
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
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Forzando skipWaiting inmediatamente');
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
            console.log('Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[SW] Tomando control inmediato de todos los clientes');
      return self.clients.claim();
    })
  );
});

// Fetch event - Network first con cache-busting para HTML
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  
  // Para navegación HTML, SIEMPRE ir a red con cache-busting
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      (async () => {
        try {
          // Agregar cache-busting para forzar nueva versión
          const bustUrl = new URL(event.request.url);
          bustUrl.searchParams.set('_swCacheBust', Date.now().toString());
          
          const networkResponse = await fetch(new Request(bustUrl.toString(), {
            method: event.request.method,
            headers: event.request.headers,
            mode: event.request.mode,
            credentials: event.request.credentials,
            cache: 'no-cache' // Forzar no usar cache del navegador
          }));
          
          // Clonar y actualizar cache
          const responseClone = networkResponse.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, responseClone);
          
          console.log('[SW] Contenido actualizado desde red:', event.request.url);
          return networkResponse;
        } catch (error) {
          console.log('[SW] Sin conexión, usando fallback de cache:', error);
          // Fallback a cache si no hay red
          const cachedResponse = await caches.match(event.request);
          return cachedResponse || caches.match('/index.html');
        }
      })()
    );
    return;
  }

  // Para recursos estáticos (CSS, JS, imágenes): stale-while-revalidate
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      
      if (cachedResponse) {
        // Devolver cache inmediatamente
        const networkFetch = fetch(event.request).then(async networkResponse => {
          if (networkResponse.ok) {
            await cache.put(event.request, networkResponse.clone());
          }
        }).catch(() => {}); // Ignorar errores de red
        
        return cachedResponse;
      }
      
      // Si no hay cache, ir a red
      return fetch(event.request);
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
