// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    '/PORTFOLIO/',
    '/PORTFOLIO/css/style.css',
    '/PORTFOLIO/css/coffee7.webp',
    '/PORTFOLIO/css/coffee8.webp',
    '/PORTFOLIO/css/vny1.jpg',  
    '/PORTFOLIO/css/vny2.jpg',
    '/PORTFOLIO/css/vny3.jpg',
    '/PORTFOLIO/js',
    '/PORTFOLIO/js/canvas.js',
    '/PORTFOLIO/js/script.js',
    '/PORTFOLIO/js/sw.js',
    '/PORTFOLIO/index.html',
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});