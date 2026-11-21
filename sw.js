/* =========================================================
   SERVICE WORKER – makes BudgetBite work offline.
   It runs in the background and keeps a copy of the app's
   files on your phone. Change CACHE_NAME (v1 → v2) whenever
   you change an icon, so phones pick up the new version.
   ========================================================= */
const CACHE_NAME = "budgetbite-v3";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

// 1. On install: save the app files on the phone
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

// 2. On activate: delete old versions of the cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// 3. On every request:
//    - the page itself: try the internet first (so you get updates),
//      and use the saved copy when you're offline
//    - everything else (icons, fonts): use the saved copy if we have it
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (req.url.includes("openfoodfacts.org")) return;   // product searches always go to the internet

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      // only keep good answers (and files from other sites, like the scanner)
      if (res.ok || res.type === "opaque") {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
