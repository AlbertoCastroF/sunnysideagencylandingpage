const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-side-menu");

hamburger.addEventListener("click", () => {
  console.log("hello");
  nav.classList.toggle("show");
});
