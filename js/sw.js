


self.addEventListener("install", function(event){
    event.waitUntil(
	caches.open('v1').then(
	function(cache) {
		return cache.addAll([
		'../restaurant.html',
		'../index.html',
        '../css/styles.css',
		'../css/responsive.css',
        '../js/main.js',
		'../js/restaurant_info.js',
        '../js/dbhelper.js',
		'../data/restaurants.json',
		'../img/1.jpg',
        '../img/2.jpg',
        '../img/3.jpg',
        '../img/4.jpg',
		'../img/5.jpg',
		'../img/6.jpg',
		'../img/7.jpg',
		'../img/8.jpg',
		'../img/9.jpg',
		'../images/1-small.jpg',
        '../images/2-small.jpg',
        '../images/3-small.jpg',
        '../images/4-small.jpg',
		'../images/5-small.jpg',
		'../images/6-small.jpg',
		'../images/7-small.jpg',
		'../images/8-small.jpg',
		'../images/9-small.jpg',
		'../images/1-medium.jpg',
        '../images/2-medium.jpg',
        '../images/3-medium.jpg',
        '../images/4-medium.jpg',
		'../images/5-medium.jpg',
		'../images/6-medium.jpg',
		'../images/7-medium.jpg',
		'../images/8-medium.jpg',
		'../images/9-medium.jpg',
		'../images/1-large.jpg',
        '../images/2-large.jpg',
        '../images/3-large.jpg',
        '../images/4-large.jpg',
		'../images/5-large.jpg',
		'../images/6-large.jpg',
		'../images/7-large.jpg',
		'../images/8-large.jpg',
		'../images/9-large.jpg',
		'../images/1-large6.jpg',
        '../images/2-large6.jpg',
        '../images/3-large6.jpg',
        '../images/4-large6.jpg',
		'../images/5-large6.jpg',
		'../images/6-large6.jpg',
		'../images/7-large6.jpg',
		'../images/8-large6.jpg',
		'../images/9-large6.jpg'    
        
      ]);
	}
    ).catch(function(err){
		console.log('error with caching');
	})
	);
	
	
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
	  console.log('it is working'));
});
	  
	  /*
	  
self.addEventListener('install', function(event){
	event.waitUntil(
	 caches.open(staticCacheName)
	 console.log('urls cache starting!');
	).then(function(cache) {
		
      return cache.addAll(urlsToCache)
	  console.log('urls cached!');
    }).catch(function(err) {
			console.log('error with caching');
	});

});


 self.addEventListener('activate', function(event){
	event.waitUntil(
	caches.keys().then(function(cacheNames){
		return Promise.all(
		cacheNamess.filter(function(cacheNames){
		return cacheName.startsWith('res')&&
		cacheName != staticCacheName;
	}).map(function(cacheName){
		return cache.delete(cacheName);
	})
	
	});
	
	)};
}); 



self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
	  console.log(response);
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
		console.log('undefined');
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('../img/1.jpg');
      });
    }
  }));
});*/