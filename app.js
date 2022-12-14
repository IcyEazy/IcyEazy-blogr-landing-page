var harmburgerIcon = document.querySelector(".harmburger"),
    harmbImg = document.getElementById("harmb"),
    closeImg = document.getElementById("close"),
    hideNav = document.querySelector(".hide"),
    introContents = document.querySelector(".intro-texts");

harmburgerIcon.addEventListener("click", function(){
    hideNav.classList.toggle("hide");
    introContents.classList.toggle("hide");
    harmbImg.classList.toggle("close");
    closeImg.classList.toggle("close");
});