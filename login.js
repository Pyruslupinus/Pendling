document.getElementById("UserName").innerHTML = localStorage.getItem("UserName");
document.getElementById("UserPassword").innerHTML = loacalStorage.getItem("Userpassword");

const form = document.getElementById('form');
const UserName = document.getElementById('UserName');
const UserPassword = document.getElementById('UserPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, messsage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const UserNameValue = UserName.value.trim();
    const UserPassword = UserPassword.value.trim();

    if(UserNameValue === ''){
        setError(UserName, 'Skriv ditt användarnamn');
    } else{
        setSuccess(UserName);
    }
    if(UserPasswordValue === ''){
        setError(UserPassword, 'Skriv ditt lösenord');
    } else{
        setSuccess(UserPassword);
    }
};