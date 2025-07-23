const menuToggle = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu-open");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  console.log("oi");

  // Atualiza ARIA e estado visual
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  menu.setAttribute("aria-hidden", isExpanded);
  menu.style.display = "flex";
  
  // Fecha o menu ao pressionar "Esc"
  if (!isExpanded) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        menuToggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      }
    });
  }
});

function verificarVisibilidade() {
  document.querySelectorAll(".card").forEach(el => {
    const rect = el.getBoundingClientRect();
    const estaVisivel = (
      rect.top <= window.innerHeight * 0.9 && // 90% da viewport
      rect.bottom >= 0
    );
    if (estaVisivel) el.classList.add("ativo");
  });
}

window.addEventListener("scroll", verificarVisibilidade);
window.addEventListener("load", verificarVisibilidade);

// function toggleMenu() {
//   const isExpanded = menuToggle.getAttribute("aria-expanded")
//   console.log("oi");
//   menu.setAttribute("aria-hidden", isExpanded);
// }