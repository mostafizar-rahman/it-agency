let showMenu = document.querySelector('.show_menu');
let closeMenu = document.querySelector('.close_menu');
let headerNav = document.querySelector('.header_nav ul');

showMenu.addEventListener('click', () => {
    headerNav.style.cssText = `
    left:0; 
    transition: all 0.9s;
    `
    console.log('click')
})
closeMenu.addEventListener('click', () => {
    headerNav.style.cssText = `
    left: -100%;
    transition: all 0.9s;
    `
})
