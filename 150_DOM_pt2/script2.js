//add / remove / toggle
const hero_list = document.getElementById('hero-list');
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function(){
    if(hero_list.classList == 'blue-class'){
        hero_list.setAttribute('class', 'red-class');
    }
    else if(hero_list.classList == 'red-class'){
        hero_list.setAttribute('class', 'green-class');
    }
    else if(hero_list.classList == 'green-class'){
        hero_list.setAttribute('class', 'blue-class');
    }
});
