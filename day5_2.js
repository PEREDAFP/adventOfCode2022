const path = require('path');
const fs = require ('fs');

//Para los movimientos

const range = (tamano, comienzo=0) =>
            [...Array(tamano).keys()].map( el => el + comienzo)

const mueve= (mov, listas) => {
        //move 12 from 6 to 8
        //Mueve mov[0] elementos desde la lista mov[2]-1 a la listamov[1]-1 

        //En esta ocasión tenemos que obtener los elementos en bloque
        //Si se el orden era DNZ debe moverse DNZ. A diferencia de la versión
        //anterior hubiera sido ZND

        const auxiliar = []
        range(mov[0]).map(el=> auxiliar.push(listas[mov[1]-1].pop()))
        listas[mov[2]-1]= [...listas[mov[2]-1],...auxiliar.reverse()]
}

/*Leemos el fichero y nos creará una lista con dos entradas:
  1.- El tablero inicial
  2.- Los movimientos
*/  
const input = fs
    .readFileSync(path.join('.', 'input.txt'), 'utf8')
    .toString()
    .split('\n\n')

const tableroLectura = input[0]
                .split('\n')
                .map(el => el
                  .split('')
                  //Observamos que la posición con el valor es 1,5,9,13...vamos la posición - uno es múltiplo de 4
                  .filter((el,idx) => (idx -1 ) % 4 == 0 )
                ) //Ahora tenemos que crear las pilas
//Creamos las pilas
const pilas = tableroLectura[tableroLectura.length-1].map(el => []) 
tableroLectura.map(el =>
                       el
                       .map((elem,idx) =>  { if (elem !== " ") pilas[idx].push(elem)} )
                  )    
//Lo invertimos            
pilas.map( el => el.reverse())
  
const movimientos = input[1]
                    .trim() 
                    .split('\n')
                    .map(el => el.split(' '))
                    //En este caso las posiciones son fijas. Pues facilito. Ojo que son string y queremos números
                    .map(el => [parseInt(el[1],10), parseInt(el[3],10),parseInt(el[5],10)])
                    .map(movimiento =>  mueve(movimiento, pilas))
//Ahora mostramos los elementos que se encuentran más arriba en las distintas pilas
console.log(pilas.reduce((ac,el)=> ac.concat(el[el.length -1 ]),[]).join(''))
