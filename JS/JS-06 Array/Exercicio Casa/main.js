
//EXERCICIO 01

var informacoes = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995
]

console.log(informacoes);
console.log(informacoes.length);
console.log(informacoes[6]);

var texto = informacoes.toString();
console.log(texto);

var virgula = informacoes.join("/");
console.log(virgula);

var ios = informacoes.unshift("IOS");
console.log(informacoes)

//EXERCICIO 02

var informacoes2 = [
["HTML", 1993, "CSS", 1996],
["Bootstrap", 2011, "JS", 1995],
["React", 2013, "Java", 1995],
]

informacoes2 [1] [2] = "JAVASCRIPT"
console.log(informacoes2)

console.log(informacoes2)
console.log(informacoes2.length);
console.log(informacoes2[2][1]);

delete informacoes2 [2] [2]
console.log(informacoes2)

var ios = informacoes2.push("PIPOCA");
console.log(informacoes2)





