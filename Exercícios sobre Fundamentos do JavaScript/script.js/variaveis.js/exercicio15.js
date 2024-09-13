// Com base na lista de números, escreva um programa que imprima no console os números que são ímpares.

function exercicio15() {
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
                    numeros.push(numero); // Adiciona o número à lista
                }
            }
        }

     
        const impares = numeros.filter(numero => numero % 2 !== 0);
        console.log('Números ímpares:');
        impares.forEach(numero => console.log(numero)); 
        
    }

    listaNumeros(); 
}

exercicio15();
