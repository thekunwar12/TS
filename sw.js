var CN='tika-saathi-v1';
var urls=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-192.png','./icons/icon-maskable-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CN).then(function(c){return c.addAll(urls)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CN}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});