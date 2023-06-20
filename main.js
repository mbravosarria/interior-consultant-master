const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu-container");
const logo = document.querySelector(".logo");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

menuIcon.addEventListener("click", () => {
  toggleHide();
});

closeIcon.addEventListener("click", () => {
  toggleHide();
});

function toggleHide() {
  menuIcon.classList.toggle("hide");
  logo.classList.toggle("hide");
  main.classList.toggle("hide");
  menu.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
  footer.classList.toggle("hide");
}
