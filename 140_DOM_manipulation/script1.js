//Change color of an element

const par1 = document.getElementById('new-york');

const par2 = document.getElementById('chicago');

par1.style.color = "blue";

par2.style.color = "red";
par2.style.alignSelf = "center";

//change an element text based on a button click

document.getElementById('my-button').onclick = function(){
    if(document.getElementById('new-york').innerText == 'New York'){
        document.getElementById('new-york').innerText = 'Chicago';
        document.getElementById('chicago').innerText = 'New York';
    }
    else{
        document.getElementById('new-york').innerText = 'New York';
        document.getElementById('chicago').innerText = 'Chicago';
    }   
}


//using query selectors wiht the first instance and with all instances
document.getElementById('btn1').onclick = () => {
    document.querySelector('p').style.color = 'black';
    document.querySelector('p').style.fontSize = '22px';
}

document.getElementById('btn2').onclick = () => {
    const cities = document.getElementsByClassName('one');

    for(let i=0; i < cities.length; i++){
        cities[i].style.color = 'red';
        cities[i].style.fontSize = '28px';
        cities[i].style.fontWeight = 'bold';
    }
}
