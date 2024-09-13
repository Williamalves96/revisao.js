// Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário. Exemplo: Informado o número 5:
// ”5 x 1 = 5”
// ”5 x 2 = 10”
// …
// ”5 x 9 = 45”
// ”5 x 10 = 50”
// em js 

function exercicio13() {
    function tabuadaMultiplicacao() {
        let numeroUsuario = Number(prompt('Digite um número para ser calculado:'));
        
        if (isNaN(numeroUsuario)) {
            console.log('Por favor, informe um número válido.');
            return; 
        }

        for (let i = 1; i <= 10; i++) {
            let resultado = numeroUsuario * i;
            console.log(`${numeroUsuario} x ${i} = ${resultado}`);
        }
    }

    tabuadaMultiplicacao();
}