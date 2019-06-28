document.addEventListener('DOMContentLoaded', function (event) {
    if(navigator.serviceWorker){
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
        console.log('Registration worked', registration);
      })
      .catch(function (err) {
        console.log('Registration failed', err);
      });
    }
});