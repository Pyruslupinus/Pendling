//Button at the bottom of the page to get back to the top.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Hamburger menu function do display the option to create account and log in.
function flipBurger() {
  var x = document.getElementById("log");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}