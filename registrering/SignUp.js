function ShowPasswordFunction() {
  var x = document.getElementById("PasswordInput")
  var i = document.getElementById("PasswordInput2")
  if (x.type === "password") {
    x.type = "text"
  }
  if(i.type === "password")
  {
    i.type = "text"
  }
    else {
    x.type = "password"
    i.type = "password"
  }
}



function RegisterSave() {
  //Sparade inputs variabler
  var EmailInput = document.getElementById("EmailInput").value
  var UserNameInput = document.getElementById("UserNameInput").value
  var PasswordInput = document.getElementById("PasswordInput").value
  var Password2 = document.getElementById("PasswordInput2").value

  if(PasswordInput != Password2)
  {
    alert("Lösenorden måste vara likadana")
  }

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



}


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
