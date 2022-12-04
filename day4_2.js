const path = require('path');
const fs = require ('fs');

const contiene = (lista1, lista2) =>{
    //Expandimos cada una de las listas
    //Ahora tenemos que comprobar que hay solapamiento entre las dos listas
    const expand1 = range((lista1[1]-lista1[0])+1,lista1[0])
    const expand2 = range((lista2[1]-lista2[0])+1,lista2[0])
    //Comprobamos si se solapan
    return (expand1.filter(el=>expand2.includes(el)).length > 0 ) ? 1 : 0
} 
            
const range = (tamano, comienzo) =>
            [...Array(tamano).keys()].map( el => el + comienzo)
       
const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .trim()
    .split('\n')
    .map(el=>el
	.split(',')
        .map(el => el
                  .split('-')
                  .map(elem => parseInt(elem,10)))                
    )                
    .map(el => contiene(el[0], el[1]))
    .reduce((ac,el)=> ac += el,0)  					 
console.log(input)
