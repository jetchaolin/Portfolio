const tgBtn = document.getElementById('theme-toggle');
const myPic = document.querySelector('.me');

const preloadDark = new Image();
preloadDark.src = 'assets/my-pic-dark2.jpg';

const preloadLight = new Image();
preloadLight.src = 'assets/my-pic-light.jpg';

let theme = localStorage.getItem('theme') || 'light';

theme === 'dark' ? (tgBtn.innerText = 'toggle_on') : (tgBtn.innerText = 'toggle_off');

function changeImage(src, origin) {
        myPic.style.opacity = '0';

        setTimeout(() => {
                myPic.src = src;
                myPic.style.transformOrigin = origin;
                myPic.style.opacity = '1';
        }, 350);
}

if (theme === 'dark') {
        document.body.classList.toggle('dark');
        changeImage(preloadDark.src, 'center');
} else {
        changeImage(preloadLight.src, 'top left');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        theme === 'dark' ? (tgBtn.innerText = 'toggle_on') : (tgBtn.innerText = 'toggle_off');

        if (theme === 'dark') {
                changeImage('assets/my-pic-dark2.jpg', 'center');
        } else {
                changeImage('assets/my-pic-light.jpg', 'top left');
        }

        console.log(myPic.src);
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', theme === 'dark' ? 'dark' : 'light');
});
