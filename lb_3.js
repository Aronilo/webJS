const modal_window = document.querySelector('.modal-window');
const open_modal = document.querySelector('.open-modal');

console.log(open_modal);
open_modal.addEventListener('click', function() {
    console.log('click');
    modal_window.classList.toggle('display-nan');
});

