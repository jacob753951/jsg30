function addTowNumbres ( firstNumber, secondNumbre){
    let result = firstNumber + secondNumbre
    return result
}

let suma1 = addTowNumbres(5,6)
let suma2 = addTowNumbres(9,16)
console.log (suma1)
console.log(suma2)


function divideDosNumeros( firstNumber,secondNumbre){
    let result = firstNumber/secondNumbre
    return result
}

let divicion = divideDosNumeros(25,5)
console.log(divicion)

function restaDosNumero( firstNumber,secondNumbre){
    let result =firstNumber-secondNumbre
    return result
}
let resta = restaDosNumero(10,3)
console.log(resta)

function multiplicaDosNumero(firstNumber,secondNumbre){
    let result = firstNumber*secondNumbre
    return result
}

let multiplicar = multiplicaDosNumero(3,8)
console.log(multiplicar)


function whoIsBiguerr(firstNumber,secondNumbre){
    if(firstNumber > secondNumbre ){
        return`${ firstNumber} es el mayor`
    } else if (firstNumber<secondNumbre){
        return`${secondNumbre} es el mayor`;
    } else {
        return`los numeros son iguales`
    }
}
 
let locos = whoIsBiguerr(5,15)
console.log (locos)


function parONon (number1){
    return (number1 % 2===0) ?"el numero es par": "el numero es Non" 

}

let parImpar =parONon(1)
console.log(parImpar)


let nombre = "Hola koders";

for (let letra of nombre) {
  console.log(letra);
}



const printLetterByaLetter =(str) =>{
    let count=str.length
    for (let i = 0; i < str.length; i++){
        console.log(str[i])

    }
    console.log(`este string tiene ${count} caracteres`)
}

printLetterByaLetter("manzana")