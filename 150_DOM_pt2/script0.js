//creating and appending elements
const heroList = document.getElementById('hero-list');
const btn1 = document.getElementById('btn1');
const newHero = document.getElementById('new-hero');

btn1.addEventListener('click', function(){
    let newLi = document.createElement('li');
    newLi.innerText = newHero.value;
    if(newLi.innerText != ""){
        heroList.appendChild(newLi);
    }
});

