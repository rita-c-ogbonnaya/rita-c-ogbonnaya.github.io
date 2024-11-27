function switchmode() {
  const themestyle = document.getElementById("theme");
  if (themestyle.getAttribute("href") === "../../styles/dark.css") {
    document
      .getElementById("theme")
      .setAttribute("href", "../");
    document.getElementById("theme-icon").className = "fa-moon";
    document.getElementById("topwhite").src =
      "assets/image/shape-top-black-80.png";
    document.getElementById("topgrey").src =
      "assets/image/shape-top-dark-grey-80.png";
    document.getElementById("topgrey2").src =
      "assets/image/shape-top-dark-grey-80.png";
  } else {
    document
      .getElementById("theme")
      .setAttribute("href", "assets/css/light.css");
    document.getElementById("theme-icon").className = "fa-sun";
    document.getElementById("topwhite").src =
      "assets/image/shape-top-white-80.png";
    document.getElementById("topgrey").src =
      "assets/image/shape-top-grey-80.png";
    document.getElementById("topgrey2").src =
      "assets/image/shape-top-grey-80.png";
  }
}











// Navbar Color change on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(".scrolled");
  } else {
    navbar.classList.remove(".scrolled");
  }
});
