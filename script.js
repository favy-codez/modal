'use script';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModal.length; i++) {
    // add event listener on the 3 buttons
   openModal[i].addEventListener('click', function(){
    console.log('btn clicked');
    // so the hidden class is set to display-none, we want to use classlist to remove it
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    });
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

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);