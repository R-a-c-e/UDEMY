//iterating throuhg arrays of objects
console.log('');
console.log('----------This section covers object arrays----------');


let superHeroes = [
    {
        name: 'Bruce Wayne',
        age: 38,
        power: 'very rich and incredible fighter'
    },
    {
        name: 'Bruce Wayne',
        age: 39,
        power: 'very rich and incredible fighter'
    },
    {
        name: 'Bruce Wayne',
        age: 40,
        power: 'very rich and incredible fighter'
    }
];


//for arrow functions if there is only one parameter, we dont need paraenthesis
//however, if there is more, we would need parenthesis
superHeroes.forEach( hero => {
    console.log(hero.name, hero.age, hero.power);
});