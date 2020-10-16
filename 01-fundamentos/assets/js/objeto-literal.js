// Al ver las llaves, se asocia directamente a un objeto literal.
// Los objetos literales son objetos que tienen (pares de valores)
// pares de valores ->  como se ve abajo en el ejemplo
// nombre: (se le llama llave), lo que viene después es su valor.
let personaje = {
    name: 'Francisco Torres',
    codeName: 'Fran',
    vivo: true,
    age: 18,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Black', 'Red', 'White'],
    direction: {
        zip: '10780, 9026',
        ubication: 'Malibu, Califormia'
    }
};

// Las propiedades se imprimen de manera alfabética
console.log(personaje);

// Forma 1 para acceder a las propiedades
console.log('Nombre', personaje.name);

// Forma 2 para acceder a las propiedades
console.log('Nombre', personaje['name']);

console.log('latitud:', personaje.coords.lat);
console.log('latitud:', personaje['coords']['lat']);

console.log('cant suits:', personaje.suits.length);

console.log('last suit:', personaje.suits[personaje.suits.length - 1]);

// Obtener valor de un elemento a través del nombre de una variable
const x = 'vivo';
console.log('Vivo', personaje[x]);

// Más detalles

// Borrar una propiedad de un objeto
delete personaje.age;
console.log(personaje);

// Es posible crear una llave desde fuera
personaje.married = false;

// Si el objeto es declarado como const, no se puede modificar completamente:
// personaje = 123.

// Trabajar como pares de valores. nombre: (pos 0), valor (pos 1).
// En otras palabras, convertir sus valores en Array.
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Un objecto freeze, significa que no va a poder ser modificado, ni agregarle ni quitarle valores.
// Va a permanecer como quedó antes de ser declarado con .freeze.
// Congela al objeto, pero no a los otros objetos que está dentro del mismo, como por ejemplo coords
Object.freeze(personaje);
// Para bloquear al objeto del objeto, se aplica la misma lógica
Object.freeze(personaje.coords);

// Obtener listado de todas las propiedades que tiene ese objeto.
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

// Obtener listado de todos los valores que tienen las propiedades de ese objeto
const valores = Object.values(personaje);
console.log(valores);