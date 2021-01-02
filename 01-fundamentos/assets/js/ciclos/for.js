const heroes = ['Batman', 'Superman', 'Joker', 'Robin', 'Thor']

console.warn('FOR tradicional');
for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('FOR in'); // Bastante utilizado
for(let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of'); 
for(let hero of heroes) { // Se acostumbra el singular
    console.log(hero);
}