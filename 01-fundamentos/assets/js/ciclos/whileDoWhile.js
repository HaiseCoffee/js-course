const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// Más técnico:

// while (cars[i]) {
//     console.log(cars[i]);
//     i++;
// }

// SALIR DEL WHILE:

while (cars[i]) {
    if(i === 1) {
        // break;
        // SEGUIR EJECUTANDO:
        i++
        continue;
    }
    console.log(cars[i]);
    i++;
}

console.warn('Do While');
let j = 0;
do {
    console.log(cars[j]);
    j++;
} while(cars[j])