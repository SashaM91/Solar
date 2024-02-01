const modalElement = document.querySelector('.modal-oddzwon'); 
const modalElementKoszt = document.querySelector('.modal-obliczyc-koszt'); 
const formElement = document.querySelector('.modal');  
const orderButtons = document.querySelector('.action-button');  
const orderButtonsKoszt = document.querySelector('.action-button-koszt')
const closeButton = document.querySelectorAll('.close-modal');
const closeButtonX = document.querySelectorAll('.close-modal.close-white');
const orderButtonObliczyc = document.querySelector('.obliczyc-koszt');
const modalDziekuje = document.querySelector('.modal-Dziekuje-za-twoja-prosbe');
const modalPrzyblizonyKoszt = document.querySelector('.Przyblizony-koszt');
const orderLinks = document.querySelectorAll('.nav-link');
const orderWyslacProsbe = document.querySelector('.obliczyc-koszt.zl40000');
const orderButtonsBlack = document.querySelector('.przeliczyc');
const orderSwiper = document.querySelector('.swiper');
const orderLastButton = document.querySelector('.action-button.ok.przeliczyc');

const openFirstTab = () => { 
    modalElement.classList.add('shown'); 
}; 
const openSecondTab = () => { 
    modalPrzyblizonyKoszt.classList.remove('shown'); 
    modalElementKoszt.classList.add('shown'); 
}; 
const openThirdTab = () => { 
    modalElementKoszt.classList.remove('shown');
    modalPrzyblizonyKoszt.classList.add('shown');
}; 
const openFourthTab = () =>{
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalDziekuje.classList.add('shown'); 
}
const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
    modalElementKoszt.classList.remove('shown');
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalDziekuje.classList.remove('shown'); 
}; 

const closeModal = event =>{
    const target = event.target;

    if  (   target === modalElement  
    || target === modalElementKoszt  
    || target === modalDziekuje  
    || target === modalPrzyblizonyKoszt){
    modalElement.classList.remove('shown');
    modalElementKoszt.classList.remove('shown');
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalDziekuje.classList.remove('shown');
    }
};

modalElement.addEventListener('click',closeModal);
    if  (  modalElementKoszt  ){
modalElementKoszt.addEventListener('click',closeModal);
}
    if  (   modalDziekuje  ){
    modalDziekuje.addEventListener('click',closeModal);
}
    if  (   modalPrzyblizonyKoszt   ){
    modalPrzyblizonyKoszt.addEventListener('click',closeModal);
}

orderButtons.addEventListener('click', openFirstTab); 
    if  (   orderButtonsKoszt   ) {
    orderButtonsKoszt.addEventListener('click', openSecondTab); 
}
    if  (   orderButtonObliczyc ){
    orderButtonObliczyc.addEventListener('click', openThirdTab); 
}
    if  (   orderWyslacProsbe   ){
    orderWyslacProsbe.addEventListener('click', openFourthTab); 
}
    if  (   orderButtonsBlack   ){
    orderButtonsBlack.addEventListener('click',openSecondTab);
}
    if  (   orderLastButton   )   {
    orderLastButton.addEventListener('click',onCloseClick)
}


closeButton.forEach((   orderButton   ) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});
closeButtonX.forEach((   orderButton   ) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});

window.addEventListener(  'keydown',(event)=>{
    if(event.key ==='Escape'){
        modalElement.classList.remove('shown');
        modalElementKoszt.classList.remove('shown');
        modalDziekuje.classList.remove('shown');
        modalPrzyblizonyKoszt.classList.remove('shown');
    }
});


if ( orderSwiper ){
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.3, 
        centeredSlides: true,
        loop: true,
        // spaceBetween: 400,
        pagination: {
              el: '.swiper-pagination',
              type:'fraction',
            },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      });
}


