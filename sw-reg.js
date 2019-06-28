document.addEventListener('DOMContentLoaded', (event) => {
    if(navigator.serviceWorker){
      navigator.serviceWorker.register('/sw.js').then( (registration) => {
        console.log('Registration worked', registration);
      })
      .catch( (err) => {
        console.log('Registration failed', err);
      });
    }
});