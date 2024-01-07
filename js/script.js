const modalElement = document.querySelector('.modal-oddzwon'); 
const modalElementKoszt = document.querySelector('.modal-obliczyc-koszt'); 
const formElement = document.querySelector('.modal');  
const orderButtons = document.querySelectorAll('.action-button');  
const orderButtonsKoszt = document.querySelectorAll('.action-button-koszt')
const closeButton = document.querySelectorAll('.close-modal');
const orderButtonObliczyc = document.querySelectorAll('.obliczyc-koszt');
const modalDziekuje = document.querySelector('.modal-Dziekuje-za-twoja-prosbe');
const orderLinks = document.querySelectorAll('.nav-link');

const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onClickKoszt = () => { 
    modalElementKoszt.classList.add('shown'); 

}; 
const onClickDziekuje = () => { 
    modalDziekuje.classList.add('shown'); 

}; 

const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
    modalElementKoszt.classList.remove('shown');
}; 


orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
orderButtonsKoszt.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickKoszt); 
});

orderButtonObliczyc.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickDziekuje); 
});
closeButton.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});






// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     effect:'coverflow',
//     centeredSlides: true,
//     direction: 'horizontal',
//     loop: true,
   
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     coverflowEffect: {
// 			rotate: 0,
// 			stretch: 0,
// 			depth: 0,
// 			modifier: 3, // 2,3
// 			slideShadows : false,
// 		},
//     spaceBetween: 50,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type:'fraction',
    // },

//   });

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 400,
    pagination: {
          el: '.swiper-pagination',
          type:'fraction',
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

