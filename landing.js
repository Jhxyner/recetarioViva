const menuHamburguesa = document.getElementById("mobile-menu");
const menuList = document.querySelector(".Menu-Horizontal");
const btnRecetas = document.getElementById("btn-recetas");
const subMenu = document.querySelector(".Menu-Vertical");
const flecha = document.querySelector(".flecha");

menuHamburguesa.addEventListener("click", function () {
  menuList.classList.toggle("active");
  menuHamburguesa.classList.toggle("is-active");
});

btnRecetas.addEventListener("click", function (e) {
  e.preventDefault();
  subMenu.classList.toggle("activado");
  flecha.classList.toggle("rotar");
});
