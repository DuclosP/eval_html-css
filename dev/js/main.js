//-------------//
//le burger
//-------------//
let menu = document.querySelector(".side-menu");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    menu.classList.add ("open");
})
menu.addEventListener("click", function() {
    menu.classList.remove ("open");
})
//-------------//
//le sticky
//-------------//
let nav = document.querySelector(".main-nav");

//récuperé la distance de la nav
let navTop = nav.offsetTop;
//ajout de l'évent sur le scrolling de windows
window.addEventListener('scroll', () => {
    //comparé la position du scroll avec la navtop
    if (window.scrollY > navTop) {
        //ajouter la classe sticky
        nav.classList.add("sticky");
    } else {
        //remove la classe sticky
        nav.classList.remove("sticky");
    }
})
