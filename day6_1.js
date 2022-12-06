const path = require('path');
const fs = require ('fs');
const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
  .trim()
  .toString()
  .split('')
  
 const busca4 = (cadena, inicio, fin ) => {
  //Comprobamos si cada bloque de 4 no tiene repetidos
  if (cadena.slice(inicio,fin).filter((item,index,array) => array.indexOf(item) === index).length == 4) {
    return fin
  } else {
    return busca4(cadena, ++inicio, ++fin)
  }
}  
console.log(busca4(input, 0, 4))
