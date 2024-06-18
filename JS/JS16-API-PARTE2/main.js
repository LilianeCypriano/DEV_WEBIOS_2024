// focusout -- identifica quando o usuario clicar fora do campo  input 
// async -- executar funções multiplas (executar varias funções ao mesmo tempo)
// try -- para tratar informações quando a retornadas com sucesso 
// catch -- para tratar informações qiando retornadas com erro
// test -- faz a validação de um valor de um campo com o regex (se tem 8 digito e se é numero)
// throw --lança uma mesagem para ususario e tratar mensagem de erro
//await = aguarda a consulta ser feita na api para continuar com o fluxo do codigo
//JSON = para transformar um objeto em JSON
// STRINGFY -- Para transformar um JSON em Objeto

let cep = document.querySelector('#cep');
let message = document.querySelector('#erroMessage');
let rua = document.querySelector('#rua');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#uf');

cep, addEventListener('focusout', async () => {
    // sabemos que a api pode retonr sucesso e erro

    try{
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;
     
        if (!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){
         console.log ("Cep Ivalido")
         throw {cep_error:'CEP  Invalido'}
        } 

       let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

       console.log (retornoAPI)

       if(!retornoAPI.ok){
        throw await retornoAPI.json
       }
        
       let response = await retornoAPI.json();
       
       console.log(response)
       cep.value = response.cep;
       rua.value = response.logradouro;
       complemento.value = response.complemento;
       bairro.value = response.bairro;
       cidade.value = response.localidade;
       estado.value = response.uf;
       





    }catch(error){
       if (error?.cep_error){
        message.textContent = error.cep_error;
        setTimeout( () => {
            message.textContent = '';
        }, 5000);
       }
       console.log(error);
    }


} )