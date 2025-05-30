const toggleButton = document.getElementById("burger");
const crossIcon = document.getElementById("cross");
const navbarList = document.getElementById("nav__list");
const $body = document.body;

// Initially, the cross icon is hidden
crossIcon.style.display = "none";

// Function to toggle the menu visibility and icon changes
function toggleMenu() {
  navbarList.classList.toggle("nav__list--active"); // Toggle the active state of the nav list
  $body.classList.toggle("has-nav"); // Optional class to indicate the nav state

  // Toggle the visibility of the hamburger and cross icons
  if (navbarList.classList.contains("nav__list--active")) {
    toggleButton.style.display = "none"; // Hide the hamburger icon
    crossIcon.style.display = "block"; // Show the cross icon
  } else {
    toggleButton.style.display = "block"; // Show the hamburger icon
    crossIcon.style.display = "none"; // Hide the cross icon
  }
}

// Add event listeners to both burger and cross icons
toggleButton.addEventListener("click", toggleMenu);
crossIcon.addEventListener("click", toggleMenu);




function updateCrossIconColor() {
  const lightMode = document.body.classList.contains("light-mode"); // Check if dark mode is active

  if (lightMode) {
    crossIcon.style.color = "black";
  } else {
    crossIcon.style.color = "white";
  }
}

// Call the function whenever you toggle dark mode
updateCrossIconColor();