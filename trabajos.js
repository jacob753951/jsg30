// 1.- Crear una función que me entregue la suma de dos números

const addTwoNumbers = (numero1, numero2) =>{
    let result = numero1+numero2
    return result

}
let suma= addTwoNumbers(5,9)
console.log (suma)

// 2,. Crear una función que evalúe si un número es par o impar

const oddAmdEven =(number) =>{
    if(number %2 === 0 ) {
        console.log(`el numero ${number} es par`)
    }else {
        console.log(`el numero ${number} es impar`)
    }
}
/** TERNARIO  */
const oddAmdEven2 =(number) =>{
   return number %2 === 0 ? console.log(`el numero ${number} es par`) :console.log(`el numero ${number} es impar`)
        
}
oddAmdEven(9)
oddAmdEven2(10)

//3,. Crear una función que escriba en consola letra por letra de un nombre

const myName=(name)=>{
    let result = name.split("")
    return result
}
let result =myName("JACOB")
console.log(result)

// 4 en proceso , crear una funcion que reciba un string , cuente la catidad de caracteres que tienen y si tiene menos de 10 caracteres indicar que el string es corte , si tiene 10  mas indicar que el string es largo 



