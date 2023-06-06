//get elements by class

document.getElementById('btn3').onclick = () => {
    let europeanCities = document.getElementsByClassName('european-city');
    for(let i = 0; i < europeanCities.length; i++){
        europeanCities[i].style.color = 'red';
        europeanCities[i].style.fontSize = '22px';
    }
}




//get elements by tag name
let headings = document.getElementsByTagName('h2');
headings[0].style.color = 'blue';

let paragraphs = document.getElementsByTagName('p');
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "black";
    paragraphs[i].style.fontWeight = "bold";
}


//appear and dissappear
let appearButton = document.getElementById('appear-dissappear');
let numList = document.getElementById('num-list');
appearButton.onclick = () => {
    if(numList.style.display == "none"){
        numList.style.display = "block";
    }
    else{
        numList.style.display = "none";
    }
}


//event listeners
const heroList = document.getElementById('hero-list');
const listenBtn = document.getElementById('listener');

listenBtn.addEventListener('click', function(){
    heroList.style.color = 'red';
    heroList.style.fontSize = '16px';

});


listenBtn.addEventListener('keydown', function(){  
    heroList.style.color = 'purple';
    heroList.style.fontSize = '30px';
});