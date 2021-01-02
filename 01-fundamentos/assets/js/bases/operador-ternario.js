const dia = 2; //0: Domingo, etc...
const horaActual = 10;

let horaApertura;
let mensaje;

//array de 0 a 6, .includes verifica si el valor de la variable dentro del paréntesis existe dentro
// if( [0,6].includes( dia ) ) { 
//     console.log('fin de semnaa');
//     horaApertura = 9;
// } else {
//     console.log('dia de semana');
//     horaApertura = 11;
// }

// MANERA DE REDUCIR EL IF:
// Primero va el primer if, después del ? el valor, else(:) el otro valor
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if(horaActual >= horaApertura) {
//     mensaje = 'abierto';
// } else {
//     mensaje = `cerrado, abrimos a las ${ horaApertura }`; //backtic, se usa para concatenar más fácil
// }

mensaje = ( horaActual >= horaApertura ) ? 'abierto' : `cerrado, abrimos a las ${ horaApertura }`;

console.log({horaApertura, mensaje});