const readline = require('readline')
//Instalo la librería readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Por favor, coloque el número que desee en la secuencia Fibonacci: ', numeroFibonacciInput => {
    const numeroFibonacci = parseInt(numeroFibonacciInput)
    resultadoFibonacci(numeroFibonacci)
})

function calcularFibonacci(numero) {
    if (numero <= 1) {
        return numero
    } else {
        return calcularFibonacci(numero - 1) + calcularFibonacci(numero - 2)
    }
}

function resultadoFibonacci(numeroFibonacci) {
    if (numeroFibonacci < 2) {
        console.log('El resultado del número de Fibonacci que pidió es:', numeroFibonacci)
    } else {
        const resultadoDeFibonacci = calcularFibonacci(numeroFibonacci)
        console.log('El resultado del número de Fibonacci que pidió es:', resultadoDeFibonacci)
    }
    return
}
