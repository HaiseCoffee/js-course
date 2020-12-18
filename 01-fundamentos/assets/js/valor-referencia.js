let a = 10;
let b = a;
a = 30;
// Pasar por referencia
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';
// Por cambiar el valor de nombre de ana, también se cambia el de juan.
// Esto se debe porque en JS todos los objetos son pasados por referencia.
// RECORDAR: Todos los primitivos son pasados por valor y todos los objetos por referencia.
console.log({juan, ana});

const cambiaNombre = ( { ...persona } ) => { // Si pusiera los ... delante de persona, se transformaría en un rest, o sea que
                                      // empezaria a ser un array.

                                      // Para que no se edite el objeto enviado por referencia, se tiene que poner entre
                                      // llaves el objeto y el spread.

    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
// Ambos son 'Tony', ya que el objeto peter se está pasando por referencia y cualquier modificación que
// se haga dentro de la función va a alterar al objeto enviado.
console.log({ peter, tony });

// ¿CÓMO EVITAR ESTO?
let martin = { nombre: 'Martin' };
let juli = { martin }; // Se tienen que colocar llaves junto al objeto que se quiere "copiar".
// Pero al hacer esto juli va a pasar a ser un objeto que dentro tiene un objeto llamado martin
// y también el nombre modificado.
juli.nombre = 'Juli';
console.log({ martin, juli });

// LA MEJOR MANERA
let john = { nombre: 'John' };
let joel = { ...john } // Los tres puntos son llamados: Spread.
joel.nombre = 'Joel';
console.log({ john, joel });

// El ejercicio pero con Arrays:
const frutas = ['Manzana', 'Pera', 'Piña'];
// FORMA 1
//const otrasFrutas = [...frutas]; // Si es un array, se pone entre llaves porque indica que se está creando un nuevo array
// y el spread para separar cada uno de los elementos del array y retornarlo de una manera independiente rompiendo dicha
// relación.

// FORMA 2
const otrasFrutas = frutas.slice();

// FORMA 3: CONSOLE.TIME Y TIMEEND MUESTRAN EL TIEMPO QUE TARDÓ EN CARGAR ESOS CAMBIOS.
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');


console.time('spread');
const otrasFrutas3 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});