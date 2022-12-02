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

const validationOK = false

function validationCheck() {
  getUsersAndCheck = localStorage.getItem("Users")
  if (getUsersAndCheck === null) {
    getUsersAndCheck = ""
  }
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
  if (EmailInput == "" || checkEmail < 1 || checkEmailDot < checkEmail + 2 || checkEmailDot + 2 >= EmailInput.length) {
    alert("Fyll i en giltig E-Mail adress")
  } //Till Username
  else if (UserNameInput == null || UserNameInput == "") {
    alert("Användarnamn kan inte vara tomt")
  } else if (UserNameInput.length < 6) {
    alert("Användarnamnet måste vara längre än 6 bokstäver")
  } //Till Password
  else if (PasswordInput.length < 6) {
    alert("Lösenordet måste vara längre än 6 bokstäver")
  } else if (PasswordInput != Password2) {
    alert("Lösenorden måste vara likadana")
  } else if (PasswordInput == "" || Password2 == "") {
    alert("Lösenordet kan inte vara tomt")
  } //Kollar om email redan finns
  else if (emailExists(EmailInput)) {
    alert("Email finns redan")
  } //Kollar om username redan finns
  else if (usernameExists(UserNameInput)) {
    alert("Användarnamn finns redan")
  } else RegisterSave()
  {
  }
}

let getUsersAndCheck = localStorage.getItem("Users")
function emailExists(email) {
  if (getUsersAndCheck.includes(email)) {
    return true
  }
  return false
}
function usernameExists(username) {
  if (getUsersAndCheck.includes(username)) {
    return true
  }
  return false
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

  window.location.href = "../registrering/login.html"
}
