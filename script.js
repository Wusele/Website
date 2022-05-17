backButton = document.getElementById("backBtn");

window.onload = function() {topFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        backButton.style.display = "block";
    }else {
        backButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function linksFunction() {
    document.documentElement.scrollTop = 1862;
    console.log(document.documentElement.scrollTop);
}

function aboutFunction() {
    document.documentElement.scrollTop = 941;
    console.log(document.documentElement.scrollTop);
}