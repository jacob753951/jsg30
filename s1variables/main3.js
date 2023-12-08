// Necesito obtener el mismo string pero con todas las letras en mayusculas
// Necesito un nuevo string que contenga las palabras del string original que esten en una posicion non
// Necesito saber cuantas palabras cortas hay en el string y cuantas palabras largas las palabras cortas tienen menos de 5 caracteres, el resto son palabras largas
// Necesito un string igual al string original, pero con las vocales en mayusculas */

let  originalString = " cuanto mas hacemos ,  mas podemos hacer"
let secondOriginalstring = " la unica diferencia entre el exito y el gracaso es la capcidad de actuar"


const convertirMayuscula = (texto) => {
    return texto.toUpperCase();
}
let resultado = convertirMayuscula (originalString)
console.log(resultado)
