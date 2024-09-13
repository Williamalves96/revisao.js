// Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números no console, exemplo:
// A = 10; B = 5;
// “A + B = 15”
// “A - B = 5”
// “A * B = 50”
// “A / B = 2”

function exercicio02(){
    let opcao = Number(prompt('Escolha uma opção: \n1-Soma\n2-Subtração\n3-Divisão\n4-Multiplicação'))
    let numero01 = parseFloat(prompt("Digite o primeiro número:"));
    let numero02 = parseFloat(prompt("Digite o segundo número:"));

    if(opcao === 1){
        alert(soma(numero01,numero02))
    }else if(opcao === 2){
        alert(subtracao(numero01,numero02))
    }else if(opcao === 3){
        alert(divisao(numero01,numero02))
    }else if(opcao=== 4){
        alert(multiplicacao(numero01,numero02))
    }else{
        alert('Digite um número válido!')
    }

   
  
}

function soma (a,b){
     
    return a+b ; 
}
function subtracao (a,b){
     
    return a-b ; 
}
function  divisao (a,b){
     
    return a/b ; 
}
function multiplicacao (a,b){
     
    return a*b ; 
}