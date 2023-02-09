'use script';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.show-modal');

const openModal = function(){
    // so the hidden class is set to display-none, we want to use classlist to remove it
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < openModalBtn.length; i++) {
    // add event listener on the 3 buttons
   openModalBtn[i].addEventListener('click', openModal);
};

// closeModalBtn.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// the code above works but using the DRY principle

// close modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);