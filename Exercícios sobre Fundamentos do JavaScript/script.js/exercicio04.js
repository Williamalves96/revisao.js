// Escreva um programa que pergunte ao usuário sua idade e imprima no console se ele é maior ou menor de idade de acordo com a legislação brasileira vigente.
function exercicio04() {
    let idadeUsuario, maiorIdade = 18

    idadeUsuario = Number(prompt('digite sua Idade '));

    if (idadeUsuario >= maiorIdade) {
        alert('Voce é maior Idade ')
    }
    else {
        alert(' Voce é menor de Idade ')
    }
}
