window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector("main");
  const intro = document.querySelector("#intro");

  // On écoute le défilement de la page
  window.addEventListener("scroll", () => {
    const introRect = intro.getBoundingClientRect();

    // Quand le bas de la section intro quitte le haut de l'écran
    if (introRect.bottom <= 60) {
      sidebar.classList.add("left");
      main.classList.add("shifted");
    } else {
      sidebar.classList.remove("left");
      main.classList.remove("shifted");
    }
  });
});
