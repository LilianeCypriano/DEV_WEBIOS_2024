//class
//Obejtos é composto por duas coisas propriedade = caracteristucas e metodos = Funcionalidades
class Carro{
    constructor(nome, ano, ){ //Molde de um objeto
        this.nome = nome;
        this.ano = ano;
        // this.arreya = [
        //     this.novo1 = {
        //         carro2 = teste 
        //         carro3 = teste1
        //     }
        // ] Modelo teste array de objeto
        }
        //funcionalidade para saber quantos anos o carro, ano atul -ano da criação
        //metodos
        anoCarro(anoatual) {
            return anoatual - this.ano;
        }
    }

    //nem= novo
    // cria uma nova copia de classe = instancie
let Carro1 = new Carro ("KWID", 2012);
let Carro2 = new Carro ('Mobi', 2015);

console.log(Carro1)
console.log(Carro2)

let anoatual = Date();
console.log(anoatual)
