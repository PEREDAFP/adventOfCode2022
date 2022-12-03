const path = require('path');
const fs = require ('fs');

const obtengoLetra = (cadena) => {
    //Creamos dos subconjuntos con la primera y la segunda mitad de las letras
    let conj1 = new Set()
    let conj2 = new Set()
    cadena
    .split('')
    .reduce((_,el,idx)=> idx < cadena.length /2 ? conj1.add(el): conj2.add(el),null)
    //Devolvemos la intersección entre los dos conjuntos. Sabemos que solo hay un elemento repetido, entonces
     return [...new Set([...conj1].filter(el => conj2.has(el)))][0]
}
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
    .map(el => obtengoLetra(el))
    .map(el => valorLetra(el))
    .reduce((ac,el)=> ac += el, 0)

    console.log(input)
    
