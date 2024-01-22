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
const formElements = document.querySelectorAll('.modal');

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


formElements.forEach((el) => { 
    el.addEventListener("click", (e) => { 
        e.stopPropagation(); 
    }) 
});





orderButtons.addEventListener('click', openFirstTab); 
if(orderButtonsKoszt){
    orderButtonsKoszt.addEventListener('click', openSecondTab); 
}
if(orderButtonObliczyc){
    orderButtonObliczyc.addEventListener('click', openThirdTab); 
}
if(orderWyslacProsbe){
    orderWyslacProsbe.addEventListener('click', openFourthTab); 
}
if(orderButtonsBlack){
    orderButtonsBlack.addEventListener('click',openSecondTab);
}
if(orderLastButton){
    orderLastButton.addEventListener('click',onCloseClick)
}


closeButton.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});
closeButtonX.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});

window.addEventListener('keydown',(event)=>{
    if(event.key ==='Escape'){
        modalElement.classList.remove('shown');
        modalElementKoszt.classList.remove('shown');
        modalDziekuje.classList.remove('shown');
        modalPrzyblizonyKoszt.classList.remove('shown');
    }
});


// const onClickPrzyblizonyKoszt = () =>{
//     modalElementKoszt.classList.remove('shown');
//     modalPrzyblizonyKoszt.classList.add('shown');
// }
// const onCloseClickX = () =>{
//     modalPrzyblizonyKoszt.classList.remove('shown');
//     modalDziekuje.classList.remove('shown'); 
// }

// const onPrzeliczycClick =() =>{
//     modalPrzyblizonyKoszt.classList.remove('shown');
//     modalElementKoszt.classList.add('shown'); 
// }



// orderButtonObliczyc.forEach((orderButton) =>{ 
//     orderButton.addEventListener('click', onClickPrzyblizonyKoszt); 
// });
// closeButton.forEach((orderButton) =>{ 
//     orderButton.addEventListener('click', onCloseClick); 
// });

// orderWyslacProsbe.forEach((orderButton) =>{ 
//     orderButton.addEventListener('click', onClickDziekuje); 
// });



// orderButtonsBlack.forEach((orderButton) =>{
//     orderButton.addEventListener('click', onPrzeliczycClick)
// });

// formElements.forEach((el) => { 
//     el.addEventListener("click", (event) => { 
//         e.stopPropagation(); 
//     }) 
// });




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
if(orderSwiper){
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


