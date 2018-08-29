const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = ['/'];

this.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache =>
  // Open a cache and cache our files
    cache.addAll(urlsToCache)));
});

this.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
