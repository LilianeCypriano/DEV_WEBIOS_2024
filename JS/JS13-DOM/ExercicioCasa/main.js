function valor(){
    let recebeValor = document.getElementById("valorAtual")
    let porcentagem = ' recebeValor * 1.17 + 215'
    let resultado = document.createElement('')
    resultado.innerHTML =  ' "Salário atual de" + ${porcentagem} '
    document.body.appendChild(Resultado)
}

