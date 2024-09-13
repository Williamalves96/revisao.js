// Com base na lista de números, escreva um programa que imprima no console uma lista substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
// O retorno deve ser: “['Fizz', 7, 'FizzBuzz', 19, 53, 'Fizz', 'Buzz', 'FizzBuzz', 34, 'Fizz']”

function exercicio19() {
    function substituirMultiplos() {
        const numeros = [3, 7, 15, 19, 53, 6, 10, 15, 34, 9];
        const resultado = numeros.map(numero => {
            if (numero % 15 === 0) {
                return 'FizzBuzz'; 
            } else if (numero % 3 === 0) {
                return 'Fizz'; 
            } else if (numero % 5 === 0) {
                return 'Buzz'; 
            } else {
                return numero; 
            }
        });

        
        console.log(resultado);
    }

    substituirMultiplos(); 
}

exercicio19(); 

