//slideShow

let slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n) {
    showDiv((slideIndex += n));
}

function showDiv(n) {
    const x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
    slideIndex = 1;
}
    if (n < 1) {
    slideIndex = x.length;
}
    for (let i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
}
    x[slideIndex - 1].style.opacity = 1;
}


