var string = "Os Alunos estão"
var string2 = "reprovados"
var string3 = "ou aprovados" 
var num1 = 2
var num2 = 4
var olhaai = "Os reprovados"


//+ >> soma ou concatenção
console.log(string + string2 + string3)
console.log("Os Alunos estão " + "reprovados " + "ou aprovados ")

//templante string
console.log(`${string + string2 + string3 + (num1 * num2) + olhaai}`)

// concatenar string e faz ao mesmo tempo contas matematicas

console.clear()

//cria uma variavel que vai receber o seguinte texto IOS fez uma excursão na TOTVS com três alunos

// I O S - T O T V S
// 0 1 2 4 6 7 8 9 10
//charat = retorna um caracter especifico

var texto1 = "IOS fez uma excursão na TOTVS com três alunos"

console.log (texto1.charAt(2))
console.log (texto1[2])

console.clear

//tamanho string
var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log (`na varial texto2 tem ${texto2.length} caracteres`)
console.log (`na variavel texto3 tem ${texto3.length} caracteres`)

var nome = "Joao"
console.log(nome.length)

// var texto4 = "aqui está em minusculo"
// var texto5 = "AQUI ESTÁ EM MAIUSCULO"

// console.log(`Maisculo:${texto5.to  UpperCase()}`)
// console.log(`Minusculo:${texto4.toLowerCase()}`)
// conta uma casa antes

var str = "Mozilla"
console.log(str)
console.log(str.substring(1, 2))

console.log(str.substring(3))

console.clear

var texto6 = "Olha a pipoca"
console.log(texto6.replace(`pipoca`, `Carreta Furacão`), )



















