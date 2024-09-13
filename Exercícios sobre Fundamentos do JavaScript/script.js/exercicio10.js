// Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
// ”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
// Exemplo de resultado: “A string ‘aplicativos’ é grande.”

function exercicio10(){
    
    function tamanhoString(str){
        let comprimento = str.length;
        if (comprimento <= 5) {
            console.log(`A string '${str}' é pequena.`);
        } else if (comprimento <= 10) {
            console.log(`A string '${str}' é média.`);
        } else {
            console.log(`A string '${str}' é grande.`);
        }
    }

    let stringUsuario = prompt('Digite uma string para avaliar seu tamanho:');
    if (stringUsuario !== null && stringUsuario.trim() !== '') {
        
      tamanhoString(stringUsuario);
    } else {
        console.log('Nenhuma string foi fornecida.');
    }
   
}