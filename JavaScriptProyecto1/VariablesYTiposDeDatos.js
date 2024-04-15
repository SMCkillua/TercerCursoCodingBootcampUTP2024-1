// // Publicado el día 15 de abril a las 9:50 a.m 
// // version de codigo (1.0)
// // Autor: Jordan Vaelncia Patiño
// // Lenguaje usado: "javascript"
// // version usado: "ES6"

// Universidad Tecnolofica De Pereira
// Programa de Ingeniería de Sistemas y Computación 

const readline = require('readline'); 
//Esto funciona para poder usar readline
const rl = readline.createInterface({       
  input: process.stdin,
  output: process.stdout
});

function Menu() {
    let opcion = 0;//para enumerar opciones
    console.log("\nMenú:");
    console.log("1. Convertir Celsius a Fahrenheit ");
    console.log("2. Calcular Indice de Masa Corporal (IMC) ");
    console.log("3. Generar nombre de usuario");
    console.log("4. Generar número Fibonacci");
    console.log("5. Salir");
    rl.question("Seleccione una opción: ", (input) => {
        opcion = input;
        console.log(typeof opcion);
        switch (opcion) {
            case "1":
                Convercion();
                
                break;
            case "2":
                calculoIMC();
                
                break;
            case "3":
                GeneradorDeNombreUsuario();
                
                break;
            case "4":
                fibonacci();
                
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Error opción inválida");
                Menu();
                break;
        }
    });
}
Menu()


function calculoIMC() {
    console.log('Este programa calcula tu IMC corporal');
    rl.question('Por favor, ingresa tu peso en kilogramos: ', (pesoInput) => {
        const peso = parseFloat(pesoInput);
        rl.question('Por favor, ingresa tu altura en metros: ', (alturaInput) => {
            const altura = parseFloat(alturaInput);
            let resultadoIMC = peso / (altura ** 2);
            console.log('Tu Índice de masa corporal (IMC) es: ', resultadoIMC);
        Menu(); });
    });
}





function Convercion(){
    console.log('Este programa hace conversiones de celsius a farenheit');
    rl.question('porfavor digite los centigrados a convetir a fahrenheit: ', (gradosCelsiusInput) => {
        const gradosCelsius = parseFloat(gradosCelsiusInput);
        let resultado = 32+(9/5 * gradosCelsius);
        console.log(gradosCelsiusInput+ '°C son: '+ resultado+ ' grados fahrenheit');
        Menu()
    });
}








function calcularFibonacci(numero) {  //Hice la función de fibonacci en varias lines, me enrrede                                                                                 
    if (numero <= 1) {
        return numero;
    } else {
            return calcularFibonacci(numero - 1) + calcularFibonacci(numero - 2);
        }
}

function resultadoFibonacci(numeroFibonacci) {
    if (numeroFibonacci < 2) {
        console.log('El resultado del número de Fibonacci que pidió es:', numeroFibonacci);
    } else {
            const resultadoDeFibonacci = calcularFibonacci(numeroFibonacci);
            console.log('El resultado del número de Fibonacci que pidió es:', resultadoDeFibonacci);
        }   
    Menu();
}

function fibonacci() {
    rl.question('Por favor, coloque el número que desee en la secuencia Fibonacci: ', (numeroFibonacciInput) => {
        const numeroFibonacci = parseInt(numeroFibonacciInput);
        resultadoFibonacci(numeroFibonacci);
    });
}
 






function GeneradorDeNombreUsuario() {
    rl.question('Por favor, coloque su nombre: ', (nombre) => {
        rl.question('Por favor, coloque su apellido: ', (apellido) => {
            rl.question('Por favor, coloque su año de nacimiento: ', (añoDeNacimiento) => {
                const nombreDeUsuario = nombre + apellido+ añoDeNacimiento;
                console.log('Su nombre de usuario va a ser:', nombreDeUsuario);
                rl.close();
            });
        });
    });
}
