let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];
// console.log("Tener el largo de un array: ", juegos.length);

let obtenerPrimero = juegos[0]
let obtenerUltimo = juegos[juegos.length-1];
// console.log("Obtener el ultimo dato de un array si desconozco su cantidad: ", obtenerUltimo);

// console.log({obtenerPrimero, obtenerUltimo});

// Recorrer el Array.
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// Insertar un nuevo elemento
juegos.push('F-Zero');

// Insertar un nuevo elemento en el principio.
juegos.unshift('Counter-Strike');

// Borrar el último elemento
juegos.pop();

// Borrar un elemento en una posición en específico.
// Borra el elemento indicado en pos, y el número siguiente indica la cantidad de elementos
// borrados a continuación. Si se indica 1, solamente se va a borrar el elemento indicado en pos.
let pos = 1; // Mario
//juegos.splice(pos, 3);

// Saber en qué posición se encuentra un elemento.
let metroitIndex = juegos.indexOf('Metroid');
console.log({metroitIndex});