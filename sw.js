self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // We are just passing requests through, not caching the massive PDF libraries.
    e.respondWith(fetch(e.request));
});
