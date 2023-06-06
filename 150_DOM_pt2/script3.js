//mouseover event
const heroes = document.getElementById('hero-list');
const para = document.getElementById('hover-par');

para.addEventListener('mouseover', () => {
    para.classList.add('red-class');
    para.style.fontSize = '25px';
});

para.addEventListener('mouseleave', () => {
    para.classList.remove('red-class');
    para.style.fontSize = '16px';

});