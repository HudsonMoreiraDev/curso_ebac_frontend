function calcular() { //função será ativa ao clicar no botão de nome Calcular,
    const valor1 = Number(document.getElementById("campo-a").value); //aqui armazenará o valor do Campo-A que o cliente irá digitar,
    const valor2 = Number(document.getElementById("campo-b").value); //aqui armazenará o valor do Campo-B que o cliente irá digitar,
    let resultado = document.getElementById("res"); //variável que armazenará a resposta do resultado dos valores.

    if(valor2 > valor1){
        resultado.innerHTML = (`O valor B é maior que o valor A!`)
        resultado.style.color = 'rgb(16, 245, 73)'
    
        
    }else if (valor1 > valor2){
        resultado.innerHTML = (`O valor A é maior que o valor B!<br>Refaça o teste.`)
        resultado.style.color = 'rgba(248, 52, 52, 1)'
    }else{
        resultado.innerHTML = (`Os números são iguais.`)
        resultado.style.color = 'rgba(255, 255, 255, 1)'
    }
    //abaixo os campos ficarão no estado inicial para o cliente digitar novos valores.
    document.getElementById("campo-a").value = ""
    document.getElementById("campo-b").value = ""
}

