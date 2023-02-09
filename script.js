'use script';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay hidden');
const openModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModal.length; i++) {
    // add event listener on the 3 buttons
   openModal[i].addEventListener('click', function(){
    console.log('btn clicked');
    // so the hidden class is set to display-none, we want to use classlist to remove it
    modal.classList.remove('hidden');
    });
}