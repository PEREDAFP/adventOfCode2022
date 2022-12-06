const path = require('path');
const fs = require ('fs');
const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
  .trim()
  .toString()
  .split('')
  
 const busca4 = (cadena, inicio, fin ) => {
  //Comprobamos si cada bloque de 14 no tiene repetidos. Es la única variación con el reto 1
  if (cadena.slice(inicio,fin).filter((el,idx,lista) => lista.indexOf(el) === idx).length == 14) {
    return fin
  } else {
    return busca4(cadena, ++inicio, ++fin)
  }
}  
console.log(busca4(input, 0, 14))
