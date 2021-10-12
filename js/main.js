// Menu
const menu = document.querySelector(".navbar__links");
const icon = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

icon.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  icon.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  menu.classList.toggle("navbar__open");
  icon.classList.toggle("open");
});
