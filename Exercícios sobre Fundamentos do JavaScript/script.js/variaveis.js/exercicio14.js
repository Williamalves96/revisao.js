// Com base na lista de números, escreva um programa que imprima no console os números que são maiores que 20.


function exercicio14() {
    function listaNumeros() {
        const numeros = [10, 20, 35, 11, 32, 4, 20, 3];
        let adicionar = true;

        while (adicionar) {
            let entrada = prompt('Digite o número a ser adicionado na lista (ou digite "sair" para encerrar):');
            if (entrada.toLowerCase() === 'sair') {
                adicionar = false;
            } else {
                let numero = Number(entrada);
                if (isNaN(numero)) {
                    console.log('Por favor, digite um número válido!');
                } else {
                    numeros.push(numero); 
                }
            }
        }

        const maioresQue20 = numeros.filter(numero => numero > 20);
        maioresQue20.forEach(numero => console.log(numero));
    }

    listaNumeros(); 
}

exercicio14(); 