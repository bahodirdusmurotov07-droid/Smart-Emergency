const CACHE_NAME = 'smart-emergency-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './auth.js',
  './comment.js',
  './ai_assistant.js',
  './offline_sos.js',
  './lab_panel.js',
  './doctor_panel.js',
  './history.js',
  './components.js',
  './app.js'
];

// O'rnatish bosqichi — barcha fayllarni telefon xotirasiga saqlash
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Internetsiz holatda keshdan yuklab berish
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
