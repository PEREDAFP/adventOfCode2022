const path = require('path');
const fs = require ('fs');

const valorLetra = (letra) => {
    //Devolvemos la posición de la letra más 26 si es mayúscula y más 0 si es minúscula
    const base = (letra === letra.toUpperCase()) ? 26 : 0 
    const indice = letra.toUpperCase().charCodeAt() - 64 //Ya que 65 es el valor de A
    return ( base + indice )  

} 
const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    //Agrupamos de tres en tres
    .map((el,idx, lista) =>  (idx % 3 == 2) ? [lista[idx - 2], lista[idx -1] , lista[idx]]: null) 
    .filter (el => el !== null)
    //Convertimos cada elemento en una lista de tres conjuntos para poder realizar la intersección
    .map(grupo3 => grupo3
                  .map(el => new Set(el.split('')))
                  .reduce((ac,el)=>ac = new Set([...ac].filter(elem => el.has(elem)))))
    .map(el => valorLetra([...el][0])) //Por especificaciones del problema únicamente se repite una letra
    .reduce((ac,el)=> ac += el,0)                   
   
 
 console.log(input)
    
