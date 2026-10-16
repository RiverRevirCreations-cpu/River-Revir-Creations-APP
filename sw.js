// Minimal installability fetch handler. No caching, offline mode, or request interception.
self.addEventListener('fetch', function (_event) {
  // Intentionally allow the browser's normal network handling.
});
