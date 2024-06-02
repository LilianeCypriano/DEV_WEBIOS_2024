class contabancaria{
    constructor(nome, idade, salario, sexo, agencia, conta, numeroconta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroconta = numeroconta;
    }

        contacorrente(){
            var taxa = 0.015;
            var desconto = this.salario * taxa;
            const novoSalario = this.salario - desconto;
            return novoSalario;

        }
        contapoupança(){
            var taxa = 0.036;
            var desconto = this.salario * taxa;
            const novoSalario = this.salario - desconto;
            return novoSalario;
        }

        contaestudante(){
            var taxa = 0.012;
            var desconto = this.salario * taxa;
            const novoSalario = this.salario - desconto;
            return novoSalario;
        }

}

let contacorrente = new contabancaria ('Irani', 25, 1500, 'Feminino', '002', 'Corrente', '6754321-1');
let contapoupança = new contabancaria ('Nivaldo', 40, 2500, 'Masculo', '001', 'Poupança', '6754321-2');
let contaestudante = new contabancaria ('Liliane', 27, 2000, 'Feminino', '003', 'Estudante', '6754321-3');


console.log(contacorrente);
console.log(contacorrente.contacorrente());



console.log(contapoupança);
console.log(contapoupança.contapoupança());


console.log(contaestudante);
console.log(contaestudante.contaestudante());



