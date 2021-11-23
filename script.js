$('.slides').slick({
    dots: true,
    Infinity: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});

//MENU RESPONSIVO
let show = true;

const menuSect = document.querySelector(".menu-sect")
const menuHamburg = menuSect.querySelector(".hamburg")

menuHamburg.addEventListener("click", () => {
    menuSect.classList.toggle("on", show)
    document.body.style.overflow = show ? "hidden" : "initial"
    show = !show;
})