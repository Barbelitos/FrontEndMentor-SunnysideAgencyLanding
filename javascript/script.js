const menuButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-list");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
