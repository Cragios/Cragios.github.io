var cacheName = 'cragios-01';
var filesToCache = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/index.html',
  '/styles/styles.css',
  '/styles/fonts/Raleway.ttf',
  '/scripts/app.js',
  '/images/icons/icon-144.png',
  '/images/icons/icon-192.png',
  '/images/icons/icon-512.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installing');

  self.skipWaiting();

  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activating');

  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetching', e.request.url);

  e.respondWith(
    caches.match(e.request)
    .then(function(response) {
      return response || fetch(e.request);
    })
  );
});
