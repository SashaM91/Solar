const modalElement = document.querySelector('.modal-oddzwon'); 
const modalElementKoszt = document.querySelector('.modal-obliczyć-koszt'); 
const formElement = document.querySelector('.modal');  
const orderButtons = document.querySelectorAll('.action-button');  
const orderButtonsKoszt = document.querySelectorAll('.action-button-koszt')
const closeButton = document.querySelector('.close-modal');
const orderButtonObliczyc = document.querySelector('.action-button-obliczyć');
const modalDziękuję = document.querySelector('.modal-Dziękuję-za-twoją-prośbę');
const orderLinks = document.querySelectorAll('.nav-link');

const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onClickKoszt = () => { 
    modalElementKoszt.classList.add('shown'); 

}; 
const onClickDziękuję = () => { 
    modalElementKoszt.classList.remove('shown');
    modalDziękuję.classList.add('shown'); 

}; 

const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
}; 

// const onClickChangeColorLink = () =>{
//     orderLinks.classList.toggle('current');
// };

orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
orderButtonsKoszt.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickKoszt); 
});

orderButtonObliczyc.addEventListener('click', onClickDziękuję); 

closeButton.addEventListener('click', onCloseClick); 

// orderLinks.forEach((orderLink) =>{
//   orderLink.addEventListener('click', onClickChangeColorLink());
// });


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     mousewhell:true;
//     keyboard: true;
//   });


