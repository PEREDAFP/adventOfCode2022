const path = require('path');
const fs = require ('fs');

const resultados = new Map ([
    ['A X', 3],
    ['A Y', 4],
    ['A Z', 8],
    ['B X', 1],
    ['B Y', 5],
    ['B Z', 9],
    ['C X', 2],
    ['C Y', 6],
    ['C Z', 7] , 
]);

const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .reduce((ac,el) => ac += resultados.get(el),0 );
    		
console.log(input);
