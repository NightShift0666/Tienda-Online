

let buttonHamburger = document.querySelector('.header__hamburger');
let navbar = document.querySelector('.header__navbar');
let menu = document.querySelector('.header__menu');
 function toggleMenu() {
    
     
     
     if(buttonHamburger.innerHTML === '☰'){

        buttonHamburger.innerHTML = '✕';
        buttonHamburger.classList.add('active');
        
     } else{
        buttonHamburger.innerHTML = '☰';
        buttonHamburger.classList.remove('active');
        
     }
 }

 buttonHamburger.addEventListener('click', ()=>{

    navbar.classList.toggle('active');
    
 });

 window.addEventListener('scroll', ()=>{

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if(scrollTop > 0){

        menu.classList.add('fixed');

    } else{
        menu.classList.remove('fixed');
    }
 });


 window.sr = ScrollReveal();

 sr.reveal('.header__arrow', {
   duration: 1000,
   origin: 'bottom',
   distance: '180px'
 });