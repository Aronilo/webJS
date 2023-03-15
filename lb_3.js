const modal_window = document.querySelector('.modal-window');
const open_modal = document.querySelector('.open-modal');

console.log(open_modal);
open_modal.addEventListener('click', function() {
    console.log('click');
    modal_window.classList.toggle('display-nan');
});

const show = formContent.querySelector('.show')
const inputPassword = formContent.querySelector('.password')
const inputEmail = formContent.querySelector('.email')

const passwordText = formContent.querySelector('.error-password')
const emailText = formContent.querySelector('.error-email')

formClose.addEventListener('click', function() {
    modal.classList.remove('modal-active')
})

formContent.addEventListener('click', (event) => {
    console.log("form content");
    event.preventDefault()
    
    if (event.target.classList.contains('exit')) {
        console.log('exit');
        modal.classList.add('hidden')
    }

    show.addEventListener('mousedown', (event) => {
        event.preventDefault()
        inputPassword.setAttribute('type','text')
    })

    show.addEventListener('mouseup', (event) => {
        event.preventDefault()
        inputPassword.setAttribute('type','password')
    })

})
