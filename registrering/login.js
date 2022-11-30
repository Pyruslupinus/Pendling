
const form = document.getElementById('form');
const username = document.getElementById('username');
const userpassword = document.getElementById('userpassword');

/*var Users = JSON.parse(localStorage.getItem('currentUser'));
console.log(Users.username);*/

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const userpasswordValue = userpassword.value.trim();

    /*if(Users){
    console.log(Users.username);
    }*/

    if(usernameValue === ''){
        setError(username, 'Skriv ditt användarnamn');
    } /*else if (!Users(usernameValue)){
        setError(username, 'användarnamn finns inte');
    }*/ else{
        setSuccess(username);
    }
    if(userpasswordValue === ''){
        setError(userpassword, 'Skriv ditt lösenord');
    } /*else if (!Users(userpasswordValue)){
        setError(userpassword, 'fel lösenord');
    } */else {
        setSuccess(userpassword);
    }
};


function okLogin() {

    var savedEmail = localStorage.getItem("EmailInput")
    var savedUsername = localStorage.getItem("UserNameInput")
    var savedPassword = localStorage.getItem("PasswordInput")
  
    if (email == savedEmail && PasswordInput == savedPassword) {
      alert("OK")
    } else {
      alert("Fel")
    }
  }

