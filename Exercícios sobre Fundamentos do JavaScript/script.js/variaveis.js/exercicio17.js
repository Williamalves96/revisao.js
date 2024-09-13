// Com base na lista de usuários, escreva um programa que imprima no console os usuários menores de idade com base na legislação brasileira e que tenham animais de estimação. 

function exercicio17() {
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
                continue;
            }

            
            let possuiAnimais = prompt('O usuário possui animais de estimação? (Digite "sim" ou "não")');
            possuiAnimais = possuiAnimais.toLowerCase() === 'sim';

            
            usuarios.push({ nome, idade, possuiAnimais });
        }

        
        const menoresComAnimais = usuarios.filter(usuario => usuario.idade < 18 && usuario.possuiAnimais);

        
        console.log('Usuários menores de idade com animais de estimação:');
        menoresComAnimais.forEach(usuario => console.log(`${usuario.nome}, ${usuario.idade} anos`));
    }

    listaUsuarios(); 
}

exercicio17(); 