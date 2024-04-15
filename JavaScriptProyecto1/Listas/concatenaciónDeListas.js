// // Publicado el día 15 de abril a las 9:50 a.m 
// // version de codigo (1.0)
// // Autor: Jordan Vaelncia Patiño
// // Lenguaje usado: "javascript"
// // version usado: "ES6"

// Universidad Tecnolofica De Pereira
// Programa de Ingeniería de Sistemas y Computación 
const lista1 = [5, 2, 8, 1];
const lista2 = [9, 4, 6, 3];         //creacion de listas
console.log('lista N1: ', lista1);
console.log('lista N2: ', lista2);

const listaCombinada = [...lista1, ...lista2];// Combinar las dos listas en una sola y transformarlo en un tipo de array

console.log('listas combinadas: ', listaCombinada);

listaCombinada.sort((a, b) => a - b);// Ordenar la lista combinada con sort

console.log('Lista combinada ordenada:', listaCombinada);