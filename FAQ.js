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
