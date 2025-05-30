document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.getElementById("openPopup");
    const popup = document.getElementById("contactPopup");

    // Open the popup when button is clicked
    openPopupBtn.addEventListener("click", () => {
        popup.showPopover();
    });
});