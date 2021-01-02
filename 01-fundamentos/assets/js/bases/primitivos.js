let nombre = 'Peter Parker';
console.log(nombre);
nombre = 'Ben Parker';
console.log(nombre);
nombre = 'Tia May';

console.log(typeof nombre); // string
nombre = 13;
console.log(typeof nombre); // number

let esMarvel = true;
console.log(esMarvel);
console.log(typeof esMarvel); // boolean

let edad = 33; // Ya sea 33 o 33.000000001, seguirá siendo number.
console.log(edad);
console.log(typeof edad); // number

let superPoder;
console.log(typeof superPoder); // Variable superpoder no tiene asignado ningún valor.

let soyNull = null;
console.log(typeof soyNull); // object
// TODOS SON OBJETOS EXCEPTUANDO LOS PRIMITIVOS

// Identificar propiedades de manera única.
let symbol1 = Symbol('b');
let symbol2 = Symbol('b');

console.log(typeof symbol1);
console.log(typeof symbol2);

console.log(symbol1 === symbol2); // ¿symbol1 es EXACTAMENTE IGUAL a symbol2?