// Map() é um metodo que execulta funções em todos os elementos de um array como mostra no explo a baixo

const numRandows = [7, 8, 9, 2, 9, 80]; // ---> numeros aleatorios

const doubleNum = numRandows.map(n => n * 2);

console.log(`O dobro dos Numeros :\n${numRandows}\né de :\n${doubleNum}`);