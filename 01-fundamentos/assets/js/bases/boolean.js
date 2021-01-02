const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación')
console.log(true);
console.log(regresaFalse());
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log(false || true);

const soyUnd = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hello World' && 150; // Se le asigna el último valor
// Si es false, no se le asigna nada porque al ser false no se va a ejecutar lo demás {a1: false}
const a2 = 'Hola' && 'Mundo' // Muestra: Mundo
// si pongo && soyFalso, saldría 'false' porque TODAS las condiciones tienen que ser verdaderas.
console.log({a1, a2});