const modalElement = document.querySelector('.modal-oddzwon'); 
const formElement = document.querySelector('.modal'); 
const orderButtons = document.querySelectorAll('.action-button'); 
const closeButton = document.querySelector('.close-modal'); 
const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
}; 

orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
closeButton.addEventListener('click', onCloseClick);  
