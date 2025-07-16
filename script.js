<script>
  // Theme toggle
  const toggleButton = document.querySelector(".toggle-theme");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#222";
      toggleButton.innerText = "Dark Mode";
    } else {
      document.body.style.background = "";
      document.body.style.color = "#f0f0f0";
      toggleButton.innerText = "Light Mode";
    }
  });

  // Modal toggle for contact form
  const openModal = document.querySelector(".contact-button");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close-modal");

  if (openModal && modal && closeModal) {
    openModal.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
</script>
