const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const toggleIcon = document.getElementById("toggle-icon");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  if (toggleIcon) {
    if (menuToggle.classList.contains("active")) {
      toggleIcon.classList.remove("fa-bars");
      toggleIcon.classList.add("fa-times");
    } else {
      toggleIcon.classList.remove("fa-times");
      toggleIcon.classList.add("fa-bars");
    }
  }
});
