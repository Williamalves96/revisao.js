// Com base na lista de usuários, escreva um programa que imprima no console uma lista de string com o nome e sobrenome dos usuários.
// Exemplo: [”João Silva”, “Maria Souza”]

function exercicio18() {
    function listaUsuarios() {
        const usuarios = [];
        let adicionar = true;

        while (adicionar) {
            
            let nome = prompt('Digite o nome do usuário (ou digite "sair" para encerrar):');
            if (nome.toLowerCase() === 'sair') {
                adicionar = false;
                break;
            }
            
           
            let sobrenome = prompt('Digite o sobrenome do usuário:');
            
            
            usuarios.push(`${nome} ${sobrenome}`);
        }

        
        console.log('Lista de usuários:');
        console.log(usuarios);
    }

    listaUsuarios(); 
}

exercicio18(); 