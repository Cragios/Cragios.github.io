if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('[App] Service Worker is registered', registration);
            })
            .catch(function (error) {
                console.error('[App] Service Worker registration failed', error);
            });
    });
} else {
    alert('Your browser does not support service workers!');
}