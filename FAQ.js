/*Sökfuntktion, jämför bara input string med text i frågor direkt. Inga taggar etc (än) */
function searchQA() {
    let input = document.getElementById("searchbar").value.toLowerCase();

    let searchElement = document.getElementsByClassName("FAQ");

    for (i = 0; i < searchElement.length; i++) {
        if (searchElement[i].innerText.toLowerCase().includes(input)){
            searchElement[i].style.display = "block";
        }else {
            searchElement[i].style.display = "none";
        }
    }
}
 /*Kaos,  Utökning av text*/
function answer1(){
    let textToShow = document.getElementById("answer1");
    let buttonText = document.getElementById("text-button1");
    toggleText(textToShow, buttonText);
}
function answer2(){
    let textToShow = document.getElementById("answer2");
    let buttonText = document.getElementById("text-button2");
    toggleText(textToShow, buttonText);
}
function answer3(){
    let textToShow = document.getElementById("answer3");
    let buttonText = document.getElementById("text-button3");
    toggleText(textToShow, buttonText);
}

function answer4() {
    let textToShow = document.getElementById("answer4");
    let buttonText = document.getElementById("guestion-button")
    if (textToShow.style.display === "block") {
        textToShow.style.display = "none";
    } else {
        textToShow.style.display = "block";
        //buttonText.innerHTML = "<i class="fa-solid fa-chevron-up"></i>"
    }
}

function toggleText(textToShow, buttonText) {

    if (textToShow.style.display === "block") {
        textToShow.style.display = "none";

        buttonText.innerHTML="Visa svar";
    } else {
        textToShow.style.display = "block";

        buttonText.innerHTML="Dölj svar";
    }
}