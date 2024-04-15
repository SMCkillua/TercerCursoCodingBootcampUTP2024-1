// // Publicado el día 15 de abril a las 9:50 a.m 
// // version de codigo (1.0)
// // Autor: Jordan Vaelncia Patiño
// // Lenguaje usado: "javascript"
// // version usado: "ES6"

// Universidad Tecnolofica De Pereira
// Programa de Ingeniería de Sistemas y Computación 

let array = [3,4,10,20,30,45,12,23] // cree la lista
console.log('Lista de números: ' + array);
function MenorYMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero; //formulas
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = MenorYMayor(array)// variable para imprimir 
console.log('El número menor es: '+numeros[0]);// mostrar resultados
console.log('El número mayor es: '+numeros[1]);