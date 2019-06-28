const CACHE_NAME = 'restaurant-cache-v1';

const UrlsToCache = [
  './',
  '/sw-reg.js',
  'index.html',
  'restaurant.html',
  'css/styles.css',
  'data/restaurants.json',
  'js/dbhelper.js',
  'js/main.js',
  'js/restaurant_info.js',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then( (cache) => {
      return cache.addAll(UrlsToCache);
    }).catch(function (err) {
      console.log('Error',err);
    })
  );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then( (response) => {
        if(response) return response;
        return fetch(event.request);
      })
    );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.delete(CACHE_NAME)
  );  
});