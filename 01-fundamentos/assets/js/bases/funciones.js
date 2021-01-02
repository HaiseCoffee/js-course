function saludar() {
    console.log("Hello World");
}

// Función anónima, se llama así porque no tiene nombre pero al asignar esta variable a una función,
// entonces esta función va a responder a saludar2
const saludar2 = function() {
    console.log("Hola Mundo 2");
}

// Puedo hacer exactamente lo mismo con una función anónima.
function saludoUsuario(nombre) {
    // Va a hacer referencia a todos los objetos que se encuentren enviados a esta función.
    // callee significa quién lo llamó
    console.log(arguments);
    console.log("Buenas " + nombre);
}

// Funciones de flecha: 
// Paréntesis para indicar que es una función.
const saludarFlecha = (nombre) => {
    console.log("Hola flecha", nombre);
}

// Cuando es una función simple que solamente retorna algo, se puede invocar de la siguiente manera
const sumar = (a, b) => a + b;

function getRandom() {
    return Math.random();
}

// Sin llaves sería de esta manera:
const random = () => Math.random();

saludar();
saludar2();
saludoUsuario('Francisco');
saludarFlecha('Flechita');
console.log(getRandom());
console.log(random());