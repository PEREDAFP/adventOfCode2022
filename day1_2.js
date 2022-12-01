import path from 'path';
import fs from 'fs';

const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
	//Separamos en listas a partir de encontrar dos líneas en blanco
	.split('\n\n')
	.map(el=>
			el
			.split('\n')
			//Cada bloque lo separamos por línea
			.map(el=>parseInt(el, 10))
			//Convertimos cada línea en entero base 10
			.reduce((ac,el)=> ac+el))
			//Acumulamos en cada posición la suma de todos los elementos
	.sort((a,b)=> b-a)		
	//Ordenamos de mayor a menor
		
		
console.log(input[0]) //Obtenemos el mayor
console.log(input[0]+input[1]+input[2])	 //Obtenemos la suma de los tres mayores
