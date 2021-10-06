const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-side-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
