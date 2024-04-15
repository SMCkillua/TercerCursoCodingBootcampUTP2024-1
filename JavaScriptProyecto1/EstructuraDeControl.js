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
    console.log("1. Adivina un número ");
    console.log("2. cacula un factorial");
    console.log("3. Contar vocales de una frase");
    console.log("4. Salir");
    rl.question("Seleccione una opción: ", (input) => {
        opcion = input;
        console.log(typeof opcion);
        switch (opcion) {
            case "1":
                unNumeroCualquiera();
                break;
            case "2":
                funcionFactorial();
                break;
            case "3":
                contarVocales();
                break;
            case "4":
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




function unNumeroCualquiera(){
    let max = 100
    rl.question("Coloque el nuemro de su adivinanza: ", (adivinanzaInput) =>{
        NumeroAleatorio = (Math.floor(Math.random()*max)); //genera un numero aleatorio

            let adivinanza = parseInt(adivinanzaInput)

            if(NumeroAleatorio == adivinanza){//compara resultados 
            console.log('Felicidades, te ganaste un petuche');

            } else if(NumeroAleatorio > adivinanza) {
                console.log('Número demasiado bajo');

                }   
                else if(NumeroAleatorio < adivinanza){
                    console.log('Número mayor de lo esperado');
                    }  
                Menu()
    });

    
}




function funcionFactorial(){
    
    rl.question('Inglrese elnúmero factorial que decea conocer: ', (numeroInput) =>{
        let numero = parseInt(numeroInput);
        let factorial = 1;    //todas las variables que se van a usar
        let resultado = 1;
    
        while(factorial <= numero) {
            resultado = factorial  * resultado;//formula
            factorial ++;
        }
        console.log('El factorial de', numero, 'es', resultado)
        Menu()
    });
}




function contarVocales() {
    rl.question('porfavor colocar la frase: ', (frase) =>{

            if (typeof frase !== 'string') {
                throw new TypeError('La frase no es una cadena de texto');//Por si halgo 
            }
        
            let vocalA = 0;//vocal A
            let vocalE = 0;//vocal E
            let vocalI = 0;//vocal I
            let vocalO = 0;//vocal O
            let vocalU = 0;//vocal U
        
            for (let i = 0; i < frase.length; i++) {
                if ('aAáÁ'.includes(frase[i])) {
                    vocalA++;
                }
                if ('eEéÉ'.includes(frase[i])) {
                    vocalE++;
                }
                if ('iIíÍ'.includes(frase[i])) {
                    vocalI++;
                }
                if ('oOóÓ'.includes(frase[i])) {
                    vocalO++;
                }
                if ('uUúÚ'.includes(frase[i])) {
                    vocalU++;
                }
            }
        
            console.log('Vocal A está: ' + vocalA);
            console.log('Vocal E está: ' + vocalE);
            console.log('Vocal I está: ' + vocalI);
            console.log('Vocal O está: ' + vocalO);
            console.log('Vocal U está: ' + vocalU);
            Menu();
    })
}