/*some() ---> O some ele verifica todas as linhas do array ou obj e retorna true caso uma das opções for verdadeira*/

const vendaIngrecos = [
    {nome: "Jorge", idade:20},
    {nome: "Matheus", idade:7},
    {nome: "Isa", idade:12},
    {nome: "Clovis", idade:2}
];

const responsavel = vendaIngrecos.some(obj => obj.idade >= 18); // ---> Verica se Algem da venda de ingreço é de maior

console.log(`O sitema consta --> ${responsavel} para a possibilidade de um responsavel`);