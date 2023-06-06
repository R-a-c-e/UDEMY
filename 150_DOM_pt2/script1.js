const list = document.getElementById('hero-list');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', ()=>{
    list.setAttribute('class', 'green-class');
});