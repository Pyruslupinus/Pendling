
const form = document.getElementById('form');
const username = document.getElementById('username');
const userpassword = document.getElementById('userpassword');


window.onload = () =>
{
    //console.log(sessionStorage.getItem("LoggedIn"));

    if(sessionStorage.getItem("LoggedIn") == "true")
    {
        //för att se om personen är inloggade: bara inloggade användare kan skapa resa, se skapa resa knappen.
        //när man trycker på skapa resa eller sök resa ska den referera till logga in sidan.
        //ingen användare->registrera sidan

        document.getElementById("inlogg").innerText="Logga Ut"
    }
    else{
       // document.getElementById("inlogg").innerText="Logga In"
        
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
            
         
           GoToHomepage()
           
           InLoggad()
         
        }
        else
        {
            //Det finns inget konto med det angivna användarnamnet eller lösenordet.
            alert("Det finns inget konto med det angivna användarnamnet eller lösenordet.")
        }
    }
}


    function GoToHomepage()
    {
       window.location.href="../index.html";
       
    }


   