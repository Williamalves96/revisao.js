// Com base na lista de usuários, escreva um programa que imprima no console os usuários maiores de idade com base na legislação brasileira.

function exercicio16() {
    function listaUsuarios() {
        const usuarios = [];
        let adicionar = true;

        while (adicionar) {
           
            let nome = prompt('Digite o nome do usuário (ou digite "sair" para encerrar):');
            if (nome.toLowerCase() === 'sair') {
                adicionar = false;
                break;
            }
            
            
            let idade = prompt('Digite a idade do usuário:');
            idade = Number(idade);

            if (isNaN(idade) || idade < 0) {
                console.log('Por favor, digite uma idade válida!');
            } else {
                usuarios.push({ nome, idade }); 
            }
        }

        
        const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);

        
        console.log('Usuários maiores de idade:');
        maioresDeIdade.forEach(usuario => console.log(`${usuario.nome}, ${usuario.idade} anos`));
    }

    listaUsuarios();
}

exercicio16(); 