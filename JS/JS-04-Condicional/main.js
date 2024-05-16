//IF = verificat condição
// Se todos os alunos estiverem com a blusa e o crachpa então todos recebem 10

var todosdecracha = false
//true == true >> true
//  true == false >> false
// if >> se // else >> senao

if(todosdecracha == true){
console.log("Todos recebem nota 10 em JS")
} else{
    console.log("Todos recebm nota 0 em JS ")
}

console.clear

var numero1 =4
var numero2 =2

// condição        ? true            :      false
numero1 > numero2 ? console.log("numero1 é maior que") : console.log("numero1 é menor")

// if(numero1 > numero2){
//     console.log("variavel numero1 é maior que a variavel numero2")} else{ // false
//         console.log("variavel  numero1 é menor que a variavel numero2")

//     }

console.clear()
// se for janeiro vai retornar verão e se for Junho vai retornar Outono , se não for nenhum dos dois vai retornar inverno

let mes = "JANEIRO"

if(mes == "JANEIRO"){
    console.log("É verao")}
    else if (mes == "JUNHO")  {
    console.log("É outono")
}else if (mes == "OUTUBRO"){
    console.log("É primarvera")
}else{
    console.log("É inverno")
}

console.clear()
// let mes = "JANEIRO"
// Precisa do Break para dá o ponto de partida
switch(mes){// guardo a expressão que quero validar
    case  "JANEIRO":
        console.log("É Verao")
        break;

    case "Junho":
        console.log("É outono")
        break;

    case  "Outono":
        console.log("É primavera")
        break;

    default:
        console.log("É inverno")
        break;

}






