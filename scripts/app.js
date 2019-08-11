(function () {
    'use strict';

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    let nav, main, header;
    let menuButton, contactButton;
    let menuOpen;
    let toggleMenu, toggleContact;

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    nav = document.querySelector('nav');
    main = document.querySelector('main');
    header = main.querySelector('header');

    menuButton = header.querySelector('#menu-button');
    contactButton = header.querySelector('#contact-button');

    menuOpen = false;

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    toggleMenu = () => {
        nav.style.width = menuOpen ? '0' : '20vw';
        menuButton.querySelectorAll('div')[0].hidden = menuOpen ? false : true;
        menuButton.querySelectorAll('div')[1].hidden = menuOpen ? true : false;
        menuButton.className = menuOpen ? 'closed' : 'opened';
        menuOpen = menuOpen ? false : true;
    }

    toggleContact = () => {
        contactButton.innerHTML = 'not yet';
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    menuButton.addEventListener('click', toggleMenu, false);
    contactButton.addEventListener('click', toggleContact, false);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////

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
})();