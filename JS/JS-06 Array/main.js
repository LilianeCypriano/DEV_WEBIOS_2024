// Array
var numero = [-2, 40, 16, 111, 33, 64]

console.log(numero)
console.log(numero[3])

//Crie uma Array unidimensional com 7 posições em todas as posições insisra o nome de 7 pessoas especiais em sua vida.
// Retorne no console a pessoas na posição 3 e seta.

// var nomes = ["Bea", "Rose", "Maithe", "Irani", "Matheus", "Margareth", "Debora", "Nivaldo"]
// console.log(nomes)
// console.log(nomes[3])
// console.log(nomes[7])

console.clear()
var bidi = [
    ["Banana", "Maça", "Pêra"]
    ["Laranja", true, 1]
    [null, "Uva", -350]
]
//para acessar info utilizando array bid passamos no colchetes o indice da linha e depois coluna
console.log(bidi)
console.log(bidi[1], [1])

console.clear

//array bidi >> Crie

var mercado = [
    ["Pipoca", "Arroz", "Feijão", "Batata"],
    ["Molho de Tomate", "Alface", "Leite pó", "Detergente"],
    ["Leite de coco", "candida", "maça", "vinagre"],
    ["Bolacha", "Azeite", "Limão", "Shampoo" ]
]

console.log(`${mercado [3][2]} \n ${mercado[1]}`)

// \n = quebrar linha

console.clear()

let moeda = ["Real", "Euro", "Coroa", "Dolar"]
console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudanca = numArray.toString();
console.log(mudanca)

console.clear()
 
var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)
var mudanca2 = teste1.join(" ** ")
console.log(mudanca2)

var mudanca3 = teste1.toString()
console.log("Com o Join")
console.log(mudanca2)
console.log("Com o ToString")
console.log(mudanca3)


//join = separar o tipo de separador e transfomra array em string

console.clear()

let array = [0, 2, 3, 5, 7]
console.log(array.length)

//array = quantidade de número , nessa casa 5 números

console.clear

let utilizapop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "Ludemila"]
console.log(utilizapop)
var mudanca4 = utilizapop.pop() //remove a ultima palavra
console.log(mudanca4)

//pop = sempre vai remover o ultimo nome 
//push = sempre vai coloca o ultimo nome 


console.clear()
var mudanca5 = utilizapop.push // adiciona no final
console.log(mudar5)
console.log(utilizapop,0)

console.clear()

var nomescarros = ["Audi", "Celta", "Uno com escada", "hb20"]
var mudanca6 = nomescarros.shift() // remove a primeira palavra
console.log(nomescarros)
console.log(mudanca6) 
console.log(nomescarros)

console.clear
var insere = ["true", 34, "JS"]
// var mudanca7 = insere.unshift("Nice") // adciona no começo
// console.log(insere)
// console.log(mudanca7)

console.clear
delete insere [2] // delete = excluir o valor , mas não exclui a palavra 
console.log(insere)








