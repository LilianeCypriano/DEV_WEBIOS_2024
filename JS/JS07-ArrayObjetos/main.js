     //Objetos - 

     let pessoa = {
        CorDosOlhos: "verde",
        altura: "1.70",
        CorCabelo: "Preto",
        Nome: "Caio",
        Sobrenome: "Maciel",
        Hobbie: ["Futebol", "LOL", "Tocar guitarra"],
        //criar outro objeto
        endereço: {
            Rua: "Joao Mediro",
            Numero: 234,
            Cidade: "São Paulo",
            Estado: "SP",

        }
     }
     
     console.log(pessoa) 
     console.log (pessoa.CorDosOlhos) //retornar apenas uma propriedade
     console.log(pessoa.Hobbie) //retorna todos os hobbies
     console.log(pessoa.Hobbie[1]) //retorna apenas hobbies
     console.log(pessoa.endereço) //retornar todo o endereço
     console.log(pessoa.endereço.Estado) // retornar apenas uma informação dentro  de enderoço
     

     console.clear()
     //conjunto de objetos,  
     
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

     console.log(tarefa)
     console.log(tarefa[1]) //retorna um objeto
     console.log(tarefa[1].nomeTarefa)// retorna uma unica propriedade de um objeto
    
     console.clear()
     
     let recebeJSON = JSON.stringify(pessoa)

     console.log(recebeJSON)

     var JSONITO = `{"CorDosOlhos":"verde","altura":"1.70","CorCabelo":"Preto","Nome":"Caio","Sobrenome":"Maciel","Hobbie":["Futebol","LOL","Tocar guitarra"],"endereço":{"Rua":"Joao Mediro","Numero":234,"Cidade":"São Paulo","Estado":"SP"}}`

     console.log(JSONITO)
     console.log(JSON.parse(JSONITO))
