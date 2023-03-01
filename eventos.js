function buscarCep(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json`) // vai la 
        
    .then (function(resposta) {
            return resposta.json();
        }) // retorno com a resposta

        .then(function (conteudo){
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf;

        }); //resultado

}