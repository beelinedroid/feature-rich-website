const CACHE = 'catpics-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './cat-192.png',
  './cat-512.png'
];

// Install SW and cache basic assets
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Fetch handler for offline use
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});