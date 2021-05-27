/*find() --> Procura um elemento e o primeiro que for positivo de acordo com os parametros passados eleretorna*/

const lanconete = [
    {lance: "Xbacon", Qtd:1},
    {lance: "Xsardinha", Qtd:1},
    {lance: "Xsafadinha", Qtd:0},
    {lance: "Xbuguer", Qtd:2},
]

const alertStock = lanconete.find(obj => obj.Qtd <= 0);

console.log(`Temos pouco ${alertStock.lance} no stock!`);