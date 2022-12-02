function ShowPasswordFunction() {
  var x = document.getElementById("PasswordInput")
  var i = document.getElementById("PasswordInput2")
  if (x.type === "password") {
    x.type = "text"
  }
  if (i.type === "password") {
    i.type = "text"
  } else {
    x.type = "password"
    i.type = "password"
  }
}


const validationOK = false;

function validationCheck(){

  //Hämtar värdet ifrån inputs värderna i HTML filen
  var EmailInput = document.getElementById("EmailInput").value
  var UserNameInput = document.getElementById("UserNameInput").value
  var PasswordInput = document.getElementById("PasswordInput").value
  var Password2 = document.getElementById("PasswordInput2").value  

  

  //Email Check
  var checkEmail = EmailInput.indexOf("@")
  var checkEmailDot = EmailInput.indexOf(".")
  //

  //Email
  if(EmailInput == "" || checkEmail<1 || checkEmailDot<checkEmail+2 || checkEmailDot+2>=EmailInput.length)
  {
    window.alert("Fyll i en giltig E-Mail adress")
  }//Till Username
  else if(UserNameInput == null || UserNameInput =="")
  {
    alert("Användarnamn kan inte vara tomt")
  }
  else if(UserNameInput.length < 6)
  {
    alert("Användarnamnet måste vara längre än 6 bokstäver")
  }//Till Password
  else if(PasswordInput.length < 6)
  {
    alert("Lösenordet måste vara längre än 6 bokstäver")
  }
  else if(PasswordInput != Password2)
  {
    alert("Lösenorden måste vara likadana")
  }
  else if(PasswordInput == "" || Password2 == "")
  {
    alert("Lösenordet kan inte vara tomt")
  }
  else if(EmailInput === localStorage.getItem(email))
  {
    alert("Email finns redan")
  }


  else(RegisterSave())
  {

  }


}


function emailExists()
{
  const userExists = userArray.find(user => JSON.stringify(user) === newUser);
}






function RegisterSave() {


  //Sparade inputs variabler
  var EmailInput = document.getElementById("EmailInput").value
  var UserNameInput = document.getElementById("UserNameInput").value
  var PasswordInput = document.getElementById("PasswordInput").value
  var Password2 = document.getElementById("PasswordInput2").value

  /*if(PasswordInput != Password2)
  {
    alert("Lösenorden måste vara likadana")
  }if(EmailInput == "" || UserNameInput == "" || PasswordInput == "" ||){
    
  }
*/
  

  const newUser = {
    //Skapar ett objekt som jag vill ska innehålla email,username och password
    email: EmailInput,
    username: UserNameInput,
    password: PasswordInput,
  }
  
  
  const userString = localStorage.getItem("Users") //Hämtar 'Users' från localStorage - är just nu i string-format
  let userArray = JSON.parse(userString) //'parse' på userString från string tillbaka till en array

  //Om arrayen nu är null, betyder det att den inte fanns sparad, skapar då en tom array
  if (userArray === null) {
    userArray = []
  }

  //Lägger till vår nya user i arrayen
  userArray.push(newUser)

  //Och konverterar tillbaka till en sträng och skriver över den existerande i localStorage
  localStorage.setItem("Users", JSON.stringify(userArray))

  window.location.href="../registrering/login.html"

}


