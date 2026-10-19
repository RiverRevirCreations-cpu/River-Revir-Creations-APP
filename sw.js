const CACHE = 'rrc-shell-v11';
const SHELL = [
  '/River-Revir-Creations-APP/',
  '/River-Revir-Creations-APP/index.html',
  '/River-Revir-Creations-APP/manifest.webmanifest',
  '/River-Revir-Creations-APP/icons/rrc-icon-192.png',
  '/River-Revir-Creations-APP/icons/rrc-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only cache the app shell. Apps Script API calls always go to the network.
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.hostname.includes('script.google.com') || url.hostname.includes('script.googleusercontent.com')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
