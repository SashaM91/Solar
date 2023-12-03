const modalElement = document.querySelector('.modal-oddzwon'); 
const modalElementKoszt = document.querySelector('.modal-obliczyć-koszt'); 
const formElement = document.querySelector('.modal');  
const orderButtons = document.querySelectorAll('.action-button');  
const orderButtonsKoszt = document.querySelectorAll('.action-button-koszt')
const closeButton = document.querySelector('.close-modal');
const orderButtonObliczyc = document.querySelector('.action-button-obliczyć');
const modalDziękuję = document.querySelector('.modal-Dziękuję-za-twoją-prośbę');

const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onClickKoszt = () => { 
    modalElementKoszt.classList.add('shown'); 

}; 
const onClickDziękuję = () => { 
    modalDziękuję.classList.add('shown'); 

}; 

const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
}; 

orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
orderButtonsKoszt.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickKoszt); 
});

orderButtonObliczyc.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickDziękuję); 
});


closeButton.addEventListener('click', onCloseClick); 



