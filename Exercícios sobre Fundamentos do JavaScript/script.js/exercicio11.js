// Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Imprima cada propriedade no console.
// Adicione uma propriedade representando a cor do carro e imprima o objeto atualizado.
// Remova a propriedade de ano do objeto e imprima o objeto atualizado.

function exercicio11(){
    let carro = [ { 
        marca:'toyota' ,
        modelo: 'corolla',
        ano : 2020 
    }] ;

    function adicionarPropriedade() {
        let nomePropriedade = prompt ('informe mais caracteristicas sobre o veiculo :') ; 
        let valorPropriedade = prompt ('agora informe o  valor da proriedade:');
         
        carro[0][nomePropriedade] = valorPropriedade;
        console.log('Objeto atualizado:', carro[0]);
        delete carro[0].ano ; 
        console.log('Objeto atualizado sem a propriedade ano:', carro[0]);

    }
        adicionarPropriedade(); 
}   