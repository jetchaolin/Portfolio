import { montarProjeto } from './util/montarProjeto.js';

const menuToggle = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu-open');
const goUpButton = document.querySelector('.go-up');
const projetos = [];

// VITRINE DE PROJETOS
const jogoDaVelha = montarProjeto(
        'Jogo da velha - React',
        { src: 'assets/tic-tac-toe/Screenshot_08-Dec_13-07-35_15186.png' },
        { href: 'https://github.com/jetchaolin/tic-tac-toe', target: '_blank' },
        { href: 'tic-tac-toe.html', target: '_blank' },
);

const listaDeTarefas = montarProjeto(
        'Lista de tarefas - Ruby on rails',
        { src: 'assets/Photos_oF3aUUIFLm.png' },
        { href: 'https://github.com/jetchaolin/task_list', target: '_blank' },
        { href: './task-list.html', target: '_blank' },
);

const blogRails = montarProjeto(
        'Blog - React on Rails',
        { src: 'assets/rails-blog/rails-blog.png' },
        { href: 'https://github.com/jetchaolin/rails_react_app', target: '_blank' },
        { href: './rails-blog.html', target: '_blank' },
);

const shortNews = montarProjeto(
        'Short News - React on Rails',
        { src: 'assets/short-news/dashboard.png' },
        { href: 'https://github.com/jetchaolin/short-news', target: '_blank' },
        { href: './short-news.html', target: '_blank' },
);

const moviesApi = montarProjeto(
	'Movies API - React',
	{ src: 'assets/movies-api/movies-api.png' },
	{ href: 'https://github.com/jetchaolin/react-movies-api', target: '_blank' },
	{ href: ''},
)

projetos.push(jogoDaVelha);
projetos.push(listaDeTarefas);
projetos.push(blogRails);
projetos.push(shortNews);
projetos.push(moviesApi);

let projetoAtual = 0;
console.log(projetoAtual);

let tituloAtual = projetos[projetoAtual].titulo;
let imagemAtual = projetos[projetoAtual].imagem.src;

const projetoTitulo = document.getElementById('titulo-projeto');
const projetoImagem = document.getElementById('showcase');

projetoTitulo.textContent = tituloAtual;
projetoImagem.style.backgroundImage = `url('${imagemAtual}')`;

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

leftButton.addEventListener('click', () => {
        projetoImagem.style.transition = 'opacity 0.5s ease-in-out';
        projetoImagem.style.opacity = 0;
        setTimeout(() => {
                if (projetoAtual == 0) projetoAtual = projetos.length;
                projetoAtual -= 1;
                projetoTitulo.textContent = projetos[projetoAtual].titulo;
                projetoImagem.style.backgroundImage = `url('${projetos[projetoAtual].imagem.src}')`;
                projetoImagem.style.transition = 'opacity 0.3s ease-in-out';
                projetoImagem.style.opacity = 1;
        }, 300);
});

rightButton.addEventListener('click', () => {
        projetoImagem.style.transition = 'opacity 0.5s ease-in-out';
        projetoImagem.style.opacity = 0;
        setTimeout(() => {
                if (projetoAtual == projetos.length - 1) projetoAtual = -1;
                projetoAtual += 1;
                projetoTitulo.textContent = projetos[projetoAtual].titulo;
                projetoImagem.style.backgroundImage = `url('${projetos[projetoAtual].imagem.src}')`;
                projetoImagem.style.transition = 'opacity 0.3s ease-in-out';
                projetoImagem.style.opacity = 1;
        }, 300);
});

const ghButton = document.getElementById('github-btn');

ghButton.addEventListener('click', () => {
        window.open(projetos[projetoAtual].gitHub.href, '_blank', 'noopener,noreferrer');
});

// MENU HAMBURGUER
menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        // Atualiza ARIA e estado visual
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menu.setAttribute('aria-hidden', isExpanded);
        menu.style.display = 'flex';

        // Fecha o menu ao pressionar "Esc"
        if (!isExpanded) {
                document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                                menuToggle.setAttribute('aria-expanded', 'false');
                                menu.setAttribute('aria-hidden', 'true');
                        }
                });
        }
});

const menuLinks = menu.querySelectorAll('a'); // Adiciona evento de clique em todos os links do menu
menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
});

// const closeButton = document.getElementById('close-button');

// closeButton.addEventListener('click', (e) => {
//         const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'false';
//         if (isMenuOpen && !menu.contains(e.target) && e.target !== menuToggle) {
//                 setTimeout(closeMenu, 10);
//         }
// });

function closeMenu() {
        menuToggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
}

// FORMULARIO
document.getElementById('my-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = encodeURIComponent(document.getElementById('name').value);
        const email = encodeURIComponent(document.getElementById('mail').value);
        const subject = encodeURIComponent(document.getElementById('subject').value);
        const message = encodeURIComponent(document.getElementById('msg').value);

        const mailtoLink = `mailto:joao.ramos0793@gmail.com?subject=${subject}&body=Nome: ${name}%0AEmail: ${email}%0A%0AMensagem:%0A${message}`;

        window.location.href = mailtoLink;
});

// window.addEventListener('scroll', function () {
//         const goUpButton = document.querySelector('.go-up');
//         // Mostrar o botão após rolar 800px para baixo
//         if (window.scrollY > 100) {
//                 goUpButton.style.display = 'flex'; // ou 'block' dependendo do seu CSS
//         } else {
//                 goUpButton.style.display = 'none';
//         }
// });

// AJUSTE DE URL E SCROLLING
function observerCallback(entries, observer) {
        entries.forEach((entry) => {
                if (entry.isIntersecting) {
                        let secaoID = entry.target.id; // Pega o ID do elemento ('#about', '#skills', etc.)
                        let novoTitulo = entry.target.dataset.titulo; // Pega um atributo de dados personalizado (opcional)
                        if (secaoID != 'main') {
                                goUpButton.style.display = 'flex';
                        } else {
                                goUpButton.style.display = 'none';
                        }
                        history.pushState(null, novoTitulo, `#${secaoID}`);
                } else {
                }
        });
}

const options = {
        root: null,

        threshold: 0.5,

        rootMargin: '0px',
};

const observer = new IntersectionObserver(observerCallback, options);

const sections = document.querySelectorAll('section');

sections.forEach((section) => {
        observer.observe(section);
});

// ANIMACOES
const imgObsv = new IntersectionObserver(
        (entries) => {
                entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('is-visible');
                                imgObsv.unobserve(entry.target); // anima só uma vez
                        }
                });
        },
        {
                threshold: 0.2,
        },
);

document.querySelectorAll('.card').forEach((el) => {
        imgObsv.observe(el);
});

document.querySelectorAll('.card-img').forEach((el) => {
        imgObsv.observe(el);
});

document.querySelectorAll('.second-section').forEach((el) => {
        imgObsv.observe(el);
});
