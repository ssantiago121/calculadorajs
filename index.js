let form = document.getElementById('form')

    form.addEventListener('submit', function(event){

        event.preventDefault() //Retira o autoreload do input

        let numero1 = Number(document.querySelector('input[name=numero1]').value) 
        let numero2 = Number(document.querySelector('input[name=numero2]').value)

        let operacaoSelecionada = event.submitter.getAttribute('name'); // Obtém o nome do botão clicado

        let resultado;
        switch(operacaoSelecionada) {
            case 'soma':
                resultado = somar(numero1, numero2);
                break;
            case 'subtracao':
                resultado = subtracao(numero1, numero2);
                break;
            case 'multiplicacao':
                resultado = multiplicacao(numero1, numero2);
                break;
            case 'divisao':
                resultado = divisao(numero1, numero2);
                break;
            // Adicione outros casos aqui, se necessário
            default:
                resultado = 'Operação inválida';
        }

    exibirResultado(resultado);
    // console.log('O resultado é:', resultado);

            
    // Função para calcular a soma
    function somar(numero1, numero2) {
        return numero1 + numero2;
    }

    function subtracao(numero1,numero2){
        return numero1 - numero2;
    }

    function multiplicacao(numero1, numero2){
        return numero1 * numero2;
    }

    function divisao(numero1, numero2){
        return numero1 / numero2
    }

    // Função para exibir o resultado na página
    function exibirResultado(resultado) {
    // Cria um elemento para exibir o resultado
        let resultadoElement = document.createElement('div');
        resultadoElement.textContent = 'O resultado é: ' + resultado;

    // Adiciona o resultado ao formulário
    form.appendChild(resultadoElement);
}

})