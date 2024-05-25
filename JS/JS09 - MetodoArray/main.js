//metodo ForEach

let frutas = [ "Banana", "Maça", "Abacaxi", "Abacate", "Laranja", "Uva"]

frutas.forEach (retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`indice: ${indice}`)
}

//2º Modelo 

// frutas.forEach(teste = (nomeFruta, indice) => 
//     console.log(`nomeFruta: ${nomeFruta}`)
// console.log(`indice: ${indice}`)
// )

//ele vai retornar o nome não apenas o indice

frutas.forEach((teste) => console.log (teste))
let tarefa = [
    {//0
        id:1,
        isPronta: true,
        nomeTarefa: "Pular",
    },
    {//1
        id:2,
        isPronta: false,
        nomeTarefa: "Correr",
    },
    {//2
        id:3,
        isPronta: true,
        nomeTarefa: "Limpar a Casa",
    },
 ]

 console.clear()


 //Array fuction
 
 tarefa.forEach((tarefa) => console.log (tarefa.nomeTarefa))

 console.clear()
 
//Metodo Map

 let numeros = [4, 9, 16, 25] 
 let novoArray = numeros.map(Math.sqrt)

 console.log("Array antigo" + numeros)
console.log("NovoArray" + novoArray)

let mapText = tarefa.map ((retornaText) => {
    console.log(retornaText.nomeTarefa)
}) 

console.log()
let numero2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numero2.filter(retornaFiltro)
function retornaFiltro(num){
    return num > 30
}

console.log(resultado)

let tarefaFiltro = tarefa.filter((retornaFiltro) => {
return retornaFiltro.isPronta == False
})

console.log(tarefaFiltro)
console.clear

let sapatos = [
    {marca: "Nike", quantidade:3},
    {marca: "Adida", quantidade:5},
    {marca: "Puma", quantidade:7} 
]
   
//retorna a informação no console
console.log(sapatos.find((retorFind) => { 
    return retorFind.marca == "Puma"
}))


