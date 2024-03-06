const navbar = document.querySelector("#navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navbar.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

abrir.addEventListener("touchend", () => {
    navbar.classList.add("visible");
})

cerrar.addEventListener("touchend", () => {
    navbar.classList.remove("visible");
})