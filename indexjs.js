//Button at the bottom of the page to get back to the top.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Hamburger menu function do display the option to create account and log in.
function flipBurger() {
  const x = document.getElementById("log");

  //Originally doing this with setting style causes two small problems:
  //1 - we have to click twice to close it the first time
  //and 2 - it no longer auto-hides <1260px when the media query is removed
  //The reason for both of these is that it technically doesn't have a style set at the start,
  //it only has style applied to it from the css, but the html.style is just "" (or unset, or null, i'm not sure :D)
  //This means the first time we try to check if the style currently is "block", we won't find it and set it to be "block" again, causing problem #1
  //And because style set directly on a piece of html overrides the css we get problem #2 with the media query being overwritten

  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }

  //The solution to this is to toggle show / hide-classes on it instead, and give it one of them to start with so we
  //(This is often done with a single hidden class that is toggled instead but I prefer being a bit more obvious with it)
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
    x.classList.add("show");
  } else {
    x.classList.add("hidden");
    x.classList.remove("show");
  }
}

//Doing it with classes introduces another problem though, cause now we need to deal with our media query through javascript too
const mediaQuery = window.matchMedia("(min-width: 1260px)");
//change = shoots off an event once when we pass the matchMedia() condition
mediaQuery.addEventListener("change", queryHandler);


function queryHandler() {
  const x = document.getElementById("log");

  //If the page doesn't have the hamburger / log, don't attempt to manipulate it
  if (x === null) {
    return;
  }

  //If our min-width is >= 1260px
  if (mediaQuery.matches) {
    //If we're currently hiding the menu, display it at larger sizes
    if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
      x.classList.add("show");
    }
  } else {
    if (x.classList.contains("show")) {
      x.classList.add("hidden");
      x.classList.remove("show");
    }
  }
}

//Finally, we need to call the handler once manually on page load to get our default behaviour
//since we're only doing it on change otherwise
window.addEventListener("load", queryHandler);
