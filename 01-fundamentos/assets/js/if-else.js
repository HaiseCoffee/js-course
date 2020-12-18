let a = 11;

if ( a > 10 ) 
    console.log('A es mayor que 0.');
 else 
    console.log('A es menor que 0');

const hoy = new Date();
let dia = hoy.getDay(); // Domingo: 0, Lunes: 1, etc...
console.log(dia);
console.log({dia});

if( dia === 4 ) {
    console.log('Domingo');
} else {
    console.log('aah te la creiste');
}

// Alternativa al if else, solamente con objetos.
dia = 5; // Si se le asigna un valor que no está, pasa a ser 'undefined'

const diaLetras = { 
    0: ()=> 'domingo - 0',
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miercoles - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6'
}

const diaLetras2 = [ 'domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ];
let diaa = 10;
// Cuando se le asigna un valor cuya salida va a ser 'undefined', se puede agregar un || para que muestre otra cosa.
// Los paréntesis luego de [dia] son para ejecutar las funciones de flecha que tiene dentro.
console.log( diaLetras[dia]() || 'Día no válido');
console.log( diaLetras2[diaa] );