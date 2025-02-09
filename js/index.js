const iconsHolderEl = document.querySelector(".icons-holder");
const navlistEl = document.querySelector(".nav-list");
const openNavEl = document.querySelector(".nav-open");
const closeNavEl = document.querySelector(".nav-close");

// Show Hide  navbar
function showNavbar() {
  console.log("onlick activated");
  openNavEl.classList.toggle("hide-element");
  closeNavEl.classList.toggle("hide-element");
  navlistEl.classList.toggle("hide-element");
}
iconsHolderEl.onclick = showNavbar;

// Navbar Autoclose when clicked on link --- Logic
const navLinks = document.getElementsByClassName("nav-link");
let navLinksArr = new Array(...navLinks);
navLinksArr.map((eachlink) => {
  eachlink.onclick = () => showNavbar();
});
