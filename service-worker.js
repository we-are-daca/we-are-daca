"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8346bd9a0cd87d181da00fed503084d0"],["/static/css/main.3871fb0c.css","4c3179f9924551f8ff08c3d8b5a7d908"],["/static/js/main.67c1fbb6.js","3ac838b892929537ea6098be846c0546"],["/static/media/Arsenal-Bold.d85a68ea.ttf","d85a68ea1a5263f119c86c07337262c8"],["/static/media/Lato-Regular.7f690e50.ttf","7f690e503a254e0b8349aec0177e07aa"],["/static/media/Muli-ExtraLightItalic.03a196db.ttf","03a196dbcf3580e5eabe433f8def0d19"],["/static/media/OpenSans-SemiBold.e1c83f94.ttf","e1c83f9474e0cc1d84a13c6d1ddf3ca5"],["/static/media/Proxima-Nova-Semibold.b8481003.ttf","b8481003a986a5c9bb03f7ed101c1e42"],["/static/media/ProximaNova-Bold.62d4d7d3.otf","62d4d7d369292a9bf23762465ec6d704"],["/static/media/ProximaNova-Regular.410504d4.otf","410504d49238e955ba7dc23a7f963021"],["/static/media/billboard-mobile.56430139.jpg","56430139fe804b7a1d436e959ddee4f8"],["/static/media/billboard-tablet.e6b016c5.jpg","e6b016c5a15ee04794a516e4496508a9"],["/static/media/billboard.f637b298.jpg","f637b298f5576a5efc887138523584f3"],["/static/media/facebook-lite.3f93e179.svg","3f93e17913b32335ad6b8b8ad02ac6c7"],["/static/media/facebook.1a46e906.svg","1a46e906be9d66d9ed2c85cc57e10a6a"],["/static/media/instagram-lite.13e5b057.svg","13e5b057e16fe09005a40a23fba24094"],["/static/media/instagram.6521013f.svg","6521013fa289d01b0f78220012f3fd85"],["/static/media/twitter-lite.8700d95d.svg","8700d95de2b7ad5273db91a36f4858d0"],["/static/media/twitter.bdcd1bec.svg","bdcd1bec3cac2830f168bc8234ae3b3a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});