// Menu
const menu = document.querySelector(".navbar__links");
const icon = document.querySelector(".navbar__icons");

icon.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  icon.classList.toggle("open");
});
