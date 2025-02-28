function showSpoilers(divID) {
    let myDiv = document.getElementById(divID);
    myDiv.classList.toggle("spoilerShown");
}

function revealFakeTextSpoiler(id) {
    let spoilerDiv = document.getElementById(id);
    spoilerDiv.classList.remove("fakeSpoiler");
    spoilerDiv.classList.add("fakeSpoilerShown");
}