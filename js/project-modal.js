document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".grid__cards");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3 class="modal-title"></h3>
      <p class="modal-description"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const closeBtn = modal.querySelector(".close-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".grid__card-title").textContent;
      const description = card.getAttribute("data-description");

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
