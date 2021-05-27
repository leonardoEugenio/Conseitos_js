/*Reduce() ---> coleta um numeros dentro de um objeto e os trabalha retornando somente 1 segue o exemplo a baixo*/

const bank = [
    {user : "jubz", saldo: 1000},
    {user : "leo", saldo: 1500},
    {user : "Geninho", saldo: 70000},
    {user : "Luciana", saldo: 3000}
]// ---> criando um obj qualquer;

const totalSaldo = bank.reduce((lastVal, obj) => lastVal + obj.saldo, 0);

console.log(`O total do valor é de : ${totalSaldo}`);