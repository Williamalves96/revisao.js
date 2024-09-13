// ​Escreva um programa que solicite ao usuário um número e avalie se um número é par ou ímpar, imprima o resultado no console conforme exemplo: ”O número 10 é par" ou ”O número 9 é impar”.

function exercicio06(){
 
    let numeroUsuario= Number(prompt('digite um numero :')) ;
     numeroUsuario = parseInt (numeroUsuario) ; 
      
     switch (numeroUsuario % 2 ) {
        case 0:
        console.log("O número " + numeroUsuario + " é par.");
        alert ("O número " + numeroUsuario + " é par.");
        break;
    case 1:
        console.log("O número " + numeroUsuario + " é ímpar.");
        alert ("O número " + numeroUsuario + " é ímpar.");
        break;
    default:
        console.log("Valor inválido.");
        break;
     }

     
}