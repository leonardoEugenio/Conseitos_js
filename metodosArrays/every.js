/*every() --> Ele verifica todos os array e retorna um dado Bolleano */ 

const numRandows = [7, 8, 9, 2, 9, 80, 8, 7]; // ---> numeros aleatorios

const numVerifyNum = numRandows.every(elem => elem < 10);

console.log(`A informação que todos os numeros é menor 10 é ${numVerifyNum}`);