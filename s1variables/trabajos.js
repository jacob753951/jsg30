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

//R= esto se resolvio utilizando un ternario, y un ciclo for 



const printLetteyrByLetter =(str )=> {
    let count =str.length
    for( let i = 0; i< count ; i++ )   {
         console.log(str [i] );
    }
    let message = `este string es ${ count<10? "corto" : "largo"} y tiene ${count} caracteres`
    console.log(message)
}

printLetteyrByLetter ("hola")

// ejercicio de objetos ,en este ejercicio se delcara el objeto dog con sus propiedades y se  añaden propiedades y valores 

let dog = {
    name: "Milaneso",
    breed: "Border Collie",
    size: "Big",
    color: "Black",
    age: 3,
    bark: () => {
      console.log("WOOF WOOOOF!!!");
    },
  };
  dog.bark()
  dog.location="mexico"
  dog.eat=()=>{
    console.log("ñamñam")
  }
  console.log(dog)
  dog.eat()

  /*
    1.- Crear una función que reciba un string, una posición inicial, una posición final, y nos devuelva un nuevo string formado por los caracteres que se encuentren en las posiciones indicadas
    Input = "Regresamos a las sombras", 3, 8
    output = "resam"*/
const subString = (originalString) => {
    return originalString.substring(3,8)
}

    console.log(subString ("Regresamos a las sombreas"))

   /* 2.- Crear una función que utilice el string "La mejor forma de predecir el futuro es creándolo", y que reemplace todas las letras "e" por alguna otra letra indicada

    input => "d"
    output => "La mdjor forma dd prdddcir dl futuro ds crdándolo"*/

const nweFrase = (originalFrase) => {
    return originalFrase.replce("e,"d")
};
console.log(nweFrase ("La mejor forma de predecir el futuro es creandolo"))

   /* 3.- Crear una función que reciba un string, un caracter cualquiera, y me indique la cantidad de veces que ese caracter se encuentra en el string
    input => "Merengue", "e"
    output => la letra "e" se usa 3 veces en la palabra "Merengue"
*/



const findCharOcurrences = (originalString, char) => {
    let expression = new RegExp(char, "g"); /*  /e/g    */
    let ocurrencesCount = originalString.match(expression).length;
    return `la letra ${char} usa ${ocurrencesCount} veces en la palabra "${originalString}"`;
  };
  
  let firstSearch = findCharOcurrences("Merenge", "n");
  console.log(firstSearch);
  
  let secondSearch = findCharOcurrences("Extraordinario", "r");
  console.log(secondSearch);
  
  let myRegex = new RegExp("e", "g");
  
  const createNewWord = (originalWord, limit) => {
    let result = "";
    for (let i = 0; i < limit; i++) {
      let char = originalWord[i];
      result += char;
    }
    return result;
  };
  
  let firstWord = createNewWord("enésimo", 4);
  console.log(firstWord);