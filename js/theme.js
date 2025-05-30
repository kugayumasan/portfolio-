const themeButton = document.getElementById("theme"); 
const disableButton = document.getElementById("disable"); 
const body = document.body;

// Load theme from localStorage and apply it
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeButton.style.display = "none"; // Hide moon (dark mode button)
    disableButton.style.display = "block"; // Show sun (light mode button)
} else {
    body.classList.remove("light-mode"); // Ensure dark mode is applied
    themeButton.style.display = "block"; // Show moon (dark mode button)
    disableButton.style.display = "none"; // Hide sun (light mode button)
}

// Function to toggle theme
function toggleTheme() {
    const isLightMode = body.classList.toggle("light-mode");

    // Save theme to localStorage
    localStorage.setItem("theme", isLightMode ? "light" : "dark");

    // Update icons
    themeButton.style.display = isLightMode ? "none" : "block";
    disableButton.style.display = isLightMode ? "block" : "none";
}

// Add event listeners
themeButton.addEventListener("click", toggleTheme);
disableButton.addEventListener("click", toggleTheme);
