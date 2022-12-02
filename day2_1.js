const path = require('path');
const fs = require ('fs');

const resultados = new Map ([
    ['A X', 4],
    ['A Y', 8],
    ['A Z', 3],
    ['B X', 1],
    ['B Y', 5],
    ['B Z', 9],
    ['C X', 7],
    ['C Y', 2],
    ['C Z', 6] , 
]);

const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .toString()
    .trim()
  	.split('\n')
    .reduce((ac,el) => ac += resultados.get(el),0 );
    		
console.log(input);
