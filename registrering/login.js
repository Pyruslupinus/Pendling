
const form = document.getElementById('form');
const username = document.getElementById('username');
const userpassword = document.getElementById('userpassword');


window.onload = () =>
{
    if(document.getElementById("inlogg") === null){
        return;
    }
    
    if(sessionStorage.getItem("LoggedIn") == "true")
    {
        document.getElementById("inlogg").innerText="Logga Ut"
    }
    else{
        document.getElementById("inlogg").innerText="Logga In"
    }
}

function InLoggad(){
    sessionStorage.setItem("LoggedIn", true) 
}

function UtLoggad(){
    sessionStorage.setItem("LoggedIn", false)
    onload()
}



//oklogin kollar om user är registrerad och att angivna lösenord och username stämmer.
function okLogin() {
    const registered_users = JSON.parse(localStorage.getItem('Users'));
    
    var UserName = document.getElementById("username").value
    var UserPassword = document.getElementById("userpassword").value

    for (user in registered_users) {

       
        if (UserName == registered_users[user].username && UserPassword == registered_users[user].password) {
            
         
           InLoggad()
           GoToHomepage()
           return;
        }
    }
    //Det finns inget konto med det angivna användarnamnet eller lösenordet.
    alert("Det finns inget konto med det angivna användarnamnet eller lösenordet.")
}


    function GoToHomepage()
    {
       window.location.href="../index.html";
       
    }


   