const path = require('path');
const fs = require ('fs');

const contiene = (lista1, lista2) => 
            ((lista1[0]<=lista2[0] && lista1[1]>=lista2[1]) || (lista1[0]>=lista2[0] && lista1[1]<=lista2[1]))
            ? 1 : 0
    
const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .trim()
	.split('\n')
	.map(el=>el
	    .split(',')
            .map(el => el
                    .split('-')
                    .map(elem => parseInt(elem,10))))
    .map(el => contiene(el[0], el[1]))
    .reduce((ac,el)=> ac += el,0)
    					 
console.log(input)
