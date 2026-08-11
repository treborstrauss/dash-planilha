const C='cf-v68c30c';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['.','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl));return r;}).catch(()=>caches.match(e.request)));});
