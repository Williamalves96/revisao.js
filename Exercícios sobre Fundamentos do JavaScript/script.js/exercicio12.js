// Escreva uma função que imprima no console o ano atual baseado na "Data Atual” do computador.
function exercicio12() {
    function mostrarAnoAtual() {
        const dataAtual = new Date();

        const anoAtual = dataAtual.getFullYear();

        console.log('ano atual:', anoAtual);
        alert (' ano Atual:'+ '\n'+ anoAtual);
    }
    mostrarAnoAtual()

}