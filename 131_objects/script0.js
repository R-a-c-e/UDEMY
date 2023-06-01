//superman is an object which containes attributes.

console.log('----------This section covers building an object----------');

let superman = {
    name: 'Clark Kent',
    age: 23,
    email: 'clarkkent@dailyplanet.com',
    spouse: 'Lois Lane',
    superPowers: ['fly', 'laser eyes', 'bullet proof'],
    isSuperHero: true,
    fly: function(){
        console.log('Superman is flying!');
    },
    introduction: function(){
        console.log('Hi, I am Clark Kent');
    },
    nameGirlfriend: function(){
        console.log(this.spouse);
    }
};


console.log(superman);