document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".project-image"); // Selecteer alle projectafbeeldingen
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    images.forEach(image => {
        image.addEventListener("click", () => {
            popupImage.src = image.src; // Update de afbeelding in de pop-up
            popup.showPopover(); // Open de pop-up
        });
    });
});