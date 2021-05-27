/*Filter() ---> permite a criação de uma função para filtrar um array ou objeto*/

const numRandows = [7, 8, 9, 2, 9, 80, 8, 7]; // ---> numeros aleatorios

const modaNumbers = numRandows.filter((elem, index, array) => array.indexOf(elem) != index)//---> esta separando os Numeros que se repetem

console.log(`Numeros Originais :\n${numRandows},\nSomente os numero em que se repentem :\n${unicNumbers}`);