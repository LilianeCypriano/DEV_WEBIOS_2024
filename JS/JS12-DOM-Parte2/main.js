//getElemntyById
//Alterar novo texto innerText= Insere um novo texto

let primeiroTitulo = document.getElementById("primeiroTitulo");

primeiroTitulo.style.color = "red";
primeiroTitulo.innerText = "Alanzoka";

//getElementyByClass

let pegaClasse = document.getElementsByClassName("getClass");

//Aplicar só para um 
// pegaClasse[1].style.color = "blue";

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = "blue"
}

//Aplicar para todos
console.log(pegaClasse);

console.clear

//getElementsByName

let byname = document.getElementsByName('filho');

console.log(byname);

byname.forEach(funcao)


// function funcao (byname) {
//     return byname.style.color = "pink"
// }

//[90, 60, 50]
//primeiro parametro é referente aos valores do meu array
//segundo parametro referente ao indice


function funcao (byname) {
        return byname.style.color = "pink"
   }

console.clear()

//getElementsByTagName

let byTagName = document.getElementsByTagName("p");

for (c = 0; c < byTagName.length; c++){ //c posição 0
    byTagName[c].style.color = "#FF4500"
    byTagName[c].style.fontSize = "20px"
    byTagName[c].style.boxShadow = "5px 2px 5px #000000"
    if(c % 2) {
        byTagName[c].style.background = "#FFFF00"

    }else {
        byTagName[c].style.background = "#FFFF00"
    }
}

let removendo = document.getElementById("remove1")
removendo.remove()

console.log(byTagName)