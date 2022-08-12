'use strict'

window.addEventListener('load', () => {

    const menu = document.querySelector('.header-right-nav');
    const burger = document.querySelector('.header-right-burger');
    
    menu.style.height = '0px';

    mostrarNav( window.screen.width );

    burger.addEventListener('click', () => {
        console.log('click burger');
        if( menu.style.visibility == 'hidden' ){
            menu.style.visibility = 'visible';
            menu.style.height = '300px';
            menu.style.opacity = '1';
            burger.style.opacity = '0.5';
        } else {
            menu.style.visibility = 'hidden';
            menu.style.height = '0px';
            burger.style.opacity = '1';
            menu.style.opacity = '0';
        }
        
    })



    function mostrarNav( width ) {
        console.log(width);
        if( width > 786 ){
            menu.style.visibility = 'visible';
            menu.style.height = '300px';
            menu.style.opacity = '1';
        } else {
            menu.style.visibility = 'hidden';
            menu.style.height = '0px';
            menu.style.opacity = '0';
        }
    }

    window.addEventListener('resize', () => {
        mostrarNav( window.screen.width );
    })

});