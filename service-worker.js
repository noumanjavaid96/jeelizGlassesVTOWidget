const CACHE_NAME = 'glasses-vto-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/JeelizVTOWidget.css',
  '/dist/JeelizVTOWidget.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
