self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==location.origin||!/editor\.html$|\/$/.test(u.pathname)||!u.pathname.includes('editor'))return;
 e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('ed1').then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
