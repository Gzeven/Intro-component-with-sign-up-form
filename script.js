const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}

//check valid email 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value.trim())) {
        email.classList.add('placeholderred');
        showError(input, 'Looks like this is not an email')
        email.placeholder = "name@host.tld"

    } else {
        showSuccess(input)
    }

}


//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} cannot be empty`);
        } else {
            showSuccess(input)
        }
    })
}


//get fieldname
function getFieldName(input) {
    return input.getAttribute("placeholder")
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([firstname, lastname, email, password]);
    checkEmail(email);

})