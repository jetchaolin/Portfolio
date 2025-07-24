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

// Adiciona evento de clique em todos os links do menu
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  menu.style.display = "none";
}

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('mail').value);
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const message = encodeURIComponent(document.getElementById('msg').value);
  
  const mailtoLink = `mailto:joao.ramos0793@gmail.com?subject=${subject}&body=Nome: ${name}%0AEmail: ${email}%0A%0AMensagem:%0A${message}`;
  
  window.location.href = mailtoLink;
});

window.addEventListener('scroll', function() {
  const goUpButton = document.querySelector('.go-up');
  // Mostrar o botão após rolar 800px para baixo
  if (window.scrollY > 800) {
    goUpButton.style.display = 'flex'; // ou 'block' dependendo do seu CSS
  } else {
    goUpButton.style.display = 'none';
  }
});
