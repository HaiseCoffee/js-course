const theBiggest = (a, b) => ( a > b ) ? a : b; // La manera más simplificada de hacer una función de flecha

const hasMembership = ( member ) => member ? '2 dolares' : '10 dolares';

console.log(theBiggest(187, 16));
console.log(hasMembership(true));

const amigo = false;
amigosArr = [ // Se puede colocar cualquier cosa
    'Peter',
    'Tony',
    'Strange',
    amigo ? 'Thor' : 'Loki', // Si es amigo entonces Thor, sino Loki
    (() => 'Nick Fury')(), //Función de flecha que retorna Nick Fury. Pero se le conoce como Función anónima autoinvocada.
    theBiggest(10, 15)
];

console.log(amigosArr);

const nota = 90; //A+ A B+ B.
const grado =  nota >= 95 ? 'A+' :
               nota >= 90 ? 'A'  :
               nota >= 85 ? 'B+' :
               nota >= 80 ? 'B'  : 'F';

console.log({nota, grado});