//using includes()

let country = 'Spain';

console.log(country.toUpperCase());
console.log(country.toLowerCase());
console.log(country.includes('z'));
console.log(country.includes('ain'));

if(country.length > 7 && country.includes('ain')){
    console.log('cool');
}
else{
    console.log('lame');
}