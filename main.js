

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


 
function screenWidth() {
   
   let width = window.innerWidth;
   console.log(width);

   if(width > 768){

      sliderBar();
   
      const setSlider = setInterval(() => {
       slider();
       
      }, 3000);
     
      const setSliderBar = setInterval(() => {
        sliderBar();
      }, 12000);

      sliderButtons[0].addEventListener('click', ()=>{
         clearInterval(setSlider);
         clearInterval(setSliderBar);
         boxesContainer.style.transition = 'all .8s ease'; 
         boxesContainer.style.marginLeft = '0%'; 
      
      
       });
      
       sliderButtons[1].addEventListener('click', ()=>{
         clearInterval(setSlider);
         clearInterval(setSliderBar);
         boxesContainer.style.transition = 'all .8s ease'; 
         boxesContainer.style.marginLeft = '-100%'; 
      
      
       });
      
       sliderButtons[2].addEventListener('click', ()=>{
         clearInterval(setSlider);
         clearInterval(setSliderBar);
         boxesContainer.style.transition = 'all .8s ease'; 
         boxesContainer.style.marginLeft = '-200%'; 
         
      
      
       });
      
       sliderButtons[3].addEventListener('click', ()=>{
         clearInterval(setSlider);
         clearInterval(setSliderBar);
         boxesContainer.style.transition = 'all .8s ease'; 
         boxesContainer.style.marginLeft = '-300%'; 
      
      
       });
   }
}

   function slider() {
   
      let boxesContainer = document.querySelector('.offers__container'); 
      let firstBox = document.querySelectorAll('.offers__boxes')[0];
      
      boxesContainer.style.marginLeft = '-200%';
      boxesContainer.style.transition = 'all .8s ease';
      setTimeout(() => {
         
         boxesContainer.insertAdjacentElement('beforeend', firstBox);
         boxesContainer.style.transition = 'none';
         boxesContainer.style.marginLeft = '-100%';
      }, 800);
   
    }
   
    function sliderBar() {
      let sliderButtons = document.querySelectorAll('.offers__circles');
   
      let index = 1;
      let e = 0;
      sliderButtons[0].style.backgroundColor = 'rgba(243, 249, 255, 0.734)';
      const interval = setInterval(() => {
   
         
      
         sliderButtons[e].style.backgroundColor = 'rgba(135, 135, 135, 0.734)';
         e++;
   
         sliderButtons[index].style.backgroundColor = 'rgba(243, 249, 255, 0.734)';
         
         index++;
    
         if(index === 5){
   
            clearInterval(interval);
            
         } 
          
      }, 3000);
    
      
    }
   
   
   
    let sliderButtons = document.querySelectorAll('.offers__circles');
    let boxesContainer = document.querySelector('.offers__container');
   


    

screenWidth();


 window.addEventListener('resize', screenWidth);
 