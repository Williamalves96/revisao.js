// Escreva uma função que recebe dois números como argumentos e retorne sua soma, armazene o resultado em uma variável e imprima no console.,

function exercicio09(){

    function somaDoisNumeros(numero1, numero2) {
        let soma = numero1 + numero2;
        return soma;
    }
    
    let numero1 = parseFloat(prompt('Digite o primeiro número:'));
    let numero2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = somaDoisNumeros(numero1,numero2);
    
   
    console.log('A soma é:', resultado);

}
