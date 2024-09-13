// Crie um array com 3 frutas e imprima cada uma no console.
// Adicione mais uma fruta ao array e imprima o array atualizado.
// Remova a última fruta do array e imprima o array atualizado.
function exercicio08() {
    let frutas = ['Maçã', 'Banana', 'Laranja'];
    let novaFruta = prompt('Digite o nome da fruta a ser adicionada:');
    if (novaFruta) {

        frutas.push(novaFruta);


        console.log('Array atualizado:', frutas);
    } else {
        console.log('Nenhuma fruta foi adicionada.');
    }
    frutas.pop();


    console.log('Array após remover a última fruta:', frutas);

}
