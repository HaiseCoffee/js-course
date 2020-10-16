function crearPersona(nombre, apellido) {
    /*return {
        nombre: nombre,
        apellido: apellido
    }*/
    // Podemos reducir este codigo ya que nombre: nombre se sabe a qué se hace referencia,
    // lo mismo con apellido
    
    // De una mejor manera quedaría:
    return {nombre, apellido}
}

// De nuevo, si una función de flecha solamente tiene un return se puede hacer de la siguiente manera:
// Al colocar paréntesis, lo decimos a JS que queremos retornar todo lo que está dentro de las llaves.
const crearPersona2 = (nombre, apellido) => ({nombre, apellido}); 

function printArguments() {
    // Se muestra como un Array con la cantidad de argumentos.
    console.log(arguments);
}

// Las funciones de flecha NO tienen arguemntos.
const printArgumentW = () => console.log(arguments); //OBTENER MAL ARGUMENTOS POR FLECHA

// Para obtenerlos correctamente por flecha sería de la siguiente manera:
// ... hace referencia al parámetro Rest el cual le dice que todos los argumentos que fueron enviados
// serán colocados dentro de un array creado en el momento.
// Después del args, no puede venir otro argumento.
const printArgumentC = (edad, ...args) => {
    // console.log({edad, args});
    return args;
};

printArguments(10, true, false, 'Francisco', 'hola');
// printArgumentW(); tira error.
printArgumentC(10, true, false, 'Francisco', 'hola');

const [casado, vivo, nombre, saludo] = printArgumentC(10, true, false, 'Francisco', 'hola');
console.log({ casado, vivo, nombre, saludo });

// Va a saber cuál es el apellido por el argumento que le está mandando que aparece cuando se posiciona
// el mouse encima.
const { apellido } = crearPersona('Francisco', 'Torres');

// Si se le quiere cambiar el nombre a la variable quedaría así.
const { apellido: nuevoApellido } = crearPersona('Francisco', 'Torres');
console.log({nuevoApellido});

// ESTRUCTURA DE ARGUMENTOS
let personaje = {
    name: 'Francisco Torres',
    codeName: 'Fran',
    vivo: true,
    // age: 18,
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

// no está del todo bien
const printProp = (pj) => {
    console.log('name:',personaje.name);
    console.log('codename:',personaje.codeName);
}

// la forma CORRECTA sería la siguiente:

// Si queremos asignarle un valor a una variable que no está creada pero estamos operando, sería 
// de la siguiente manera
const printProp2 = ({name, codeName, vivo, age = -1}) => {
    console.log({name});
    console.log({codeName});
    console.log({vivo});
    console.log({age});
}

printProp(personaje);
printProp2(personaje);