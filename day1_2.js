import path from 'path';
import fs from 'fs';

const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
	.split('\n\n')
	.map(el=>
			el
			.split('\n')
			.map(el=>parseInt(el, 10))
			.reduce((ac,el)=> ac+el))
	.sort((a,b)=> b-a)		
		
		
console.log(input[0])
console.log(input[0]+input[1]+input[2])	
