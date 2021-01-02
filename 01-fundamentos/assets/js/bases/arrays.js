// 10 elementos internamente. No es muy común verlo de esta forma.
// const arr = new Array(10); 
// const arr = [];

// let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
// console.log({videoJuegos});

// También pueden ser definidos de estas maneras.
let arrMultiple = [
    true,
    123,
    'Hola',
    2 * 4,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'F', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log({arrMultiple});
console.log(arrMultiple[7][4][1]);