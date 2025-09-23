

const carrusel = document.getElementById("carrusel");
const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");

btnLeft.addEventListener("click", () => {
  carrusel.scrollBy({ left: -carrusel.clientWidth, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  carrusel.scrollBy({ left: carrusel.clientWidth, behavior: "smooth" });
});