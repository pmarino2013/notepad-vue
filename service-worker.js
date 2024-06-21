const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/",
  "/src/style.css",
  "/src/main.js",
  "/index.html",
  "/public/font-awesome.min.css",
  // Añadir más URLs de recursos del CDN si es necesario
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierta");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
