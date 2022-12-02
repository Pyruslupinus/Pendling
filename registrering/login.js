
const form = document.getElementById('form');
const username = document.getElementById('username');
const userpassword = document.getElementById('userpassword');



function okLogin() {

    
    /* var savedUsername = localStorage.getItem("UserNameInput")
     var savedPassword = localStorage.getItem("PasswordInput")
     */
     var Users = JSON.parse(localStorage.getItem('Users'));
     var UserName = document.getElementById("username").value
     var UserPassword = document.getElementById("userpassword").value
    
 
 
 for (let index = 0; index < Users.length; index++) {
     const element = Users[index];
 
     if (UserName == element.username && UserPassword == element.password) {
         alert("OK")
       } else {
         alert("Fel")
       }   
 }
   }

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
   /* if (usernameValue == savedUsername && userpasswordValue == savedPassword) {
      alert("OK")
    } else {
      alert("Fel")
    }
    */


