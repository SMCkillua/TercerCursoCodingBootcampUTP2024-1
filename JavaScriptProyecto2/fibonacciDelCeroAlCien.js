imprimirFibonacci()
function imprimirFibonacci() {
    let i = 0
    while (i <= 20) {
        console.log(calcularFibonacci(i))
        i++
    }
}
function calcularFibonacci(numero) {
    if (numero <= 1) {
        return numero
    } else {
        return calcularFibonacci(numero - 1) + calcularFibonacci(numero - 2)
    }
}
