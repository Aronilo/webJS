const modal_window = document.querySelector('.modal-window');
const open_modal = document.querySelector('.open-modal');

const formContent = modal_window.querySelector('.form')
const show = formContent.querySelector('.show')
const inputPassword = formContent.querySelector('#password')
const inputEmail = formContent.querySelector('#email')
const exitButton = formContent.querySelector(`.exit`)

const passwordText = formContent.querySelector('.error-password')
const emailText = formContent.querySelector('.error-email')


open_modal.addEventListener('click', function(event) {
    modal_window.classList.toggle('display-nan')
})

exitButton.addEventListener('click', function(event) {
    modal_window.classList.toggle('display-nan')
})

formContent.addEventListener('submit', (event) => {
    event.preventDefault();

    const registerForm = event.currentTarget;
    const formData = new FormData(registerForm);

    console.table({
        "Пароль": formData.get("user-password"),
        "Email": formData.get("user-email")
    });
})

modal_window.addEventListener('click', (event) =>{
    if (event.target === event.currentTarget) {
        modal_window.classList.add(`display-nan`)
    }
})

show.addEventListener('pointerdown', (event) => {
    inputPassword.setAttribute('type','text')
})

show.addEventListener('pointerup', (event) => {
    inputPassword.setAttribute('type','password')
})

function vailed(event) {
    const input = event.currentTarget;
    const validity = input.validity;
    let errorMessage = "";
    if(validity.valueMissing) {
        errorMessage = "Поле не заполнено";
    }
    else if (validity.badInput) {
        errorMessage = "Поле заполнено неверно";
    }
    else if (validity.tooShort) {
        errorMessage = `Минимальная длина ${input.minLength} сим.`;
    }
    else if (validity.typeMismatch) {
        errorMessage = "Неправильный формат ввода";
    }
    else if (validity.valid) {
        errorMessage = "";
    }

    input.setCustomValidity(errorMessage);
    const formRow = input.closest(`.form__row`);
    const error = formRow.querySelector(`.error`);
    error.textContent = errorMessage;
}

inputPassword.addEventListener('blur', vailed);
inputEmail.addEventListener('blur', vailed);