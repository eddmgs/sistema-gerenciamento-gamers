const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

// -------------------------------------------------------------
// MOSTRAR OPÇÕES
// -------------------------------------------------------------

function Mostraopcoes() {
    console.log("\n==============================================================");
    console.log("------ Sistema de Gamers ------------------------------------");
    console.log("Digite 1 para CADASTRAR um usuário");
    console.log("Digite 2 para DELETAR um usuário");
    console.log("Digite 3 para MOSTRAR o time");
    console.log("Digite 4 para MOSTRAR o cálculo da média da equipe");
    console.log("Digite 5 para ATUALIZAR a pontuação de um usuário");
    console.log("Digite 6 para SAIR do programa");
    console.log("--------------------------------------------------------------");
}


// -------------------------------------------------------------
// ATUALIZAR PONTUAÇÃO
// -------------------------------------------------------------

function Atualizarpontuacao() {

    if (time.length === 0) {
        console.log("Não há usuários cadastrados para atualizar a pontuação!");
        return;
    }

    const nomeatualizado = prompt(
        "Digite o nome do jogador cuja pontuação será atualizada: "
    );

    for (let i = 0; i < time.length; i++) {

        if (time[i].nome === nomeatualizado) {

            const novapontuacao = Number(
                prompt("Digite a nova pontuação do jogador de hoje: ")
            );

            if (isNaN(novapontuacao) || novapontuacao < 0) {
                console.log("Pontuação inválida!");
                return;
            }

            time[i].pontos = time[i].pontos + novapontuacao;

            console.log(
                "Sucesso! A pontuação do jogador " +
                nomeatualizado +
                " somou " +
                novapontuacao +
                " pontos, totalizando " +
                time[i].pontos +
                " pontos."
            );

            return;
        }
    }

    console.log("Jogador não encontrado no time!");
}


// -------------------------------------------------------------
// MOSTRAR TIME
// -------------------------------------------------------------

function Mostrartime() {

    if (time.length === 0) {
        console.log("Não há usuários cadastrados no time!");
        return;
    }

    console.log("\n------------------- TIME -------------------");

    for (let i = 0; i < time.length; i++) {

        const jogador = time[i];

        console.log(
            "Jogador " +
            (i + 1) +
            ": " +
            jogador.nome +
            " - Pontos: " +
            jogador.pontos +
            " - Função: " +
            jogador.funcao
        );
    }

    console.log("--------------------------------------------");
}


// -------------------------------------------------------------
// CADASTRAR USUÁRIO
// -------------------------------------------------------------

function Cadastrarusuario() {

    const nomejogador = prompt("Digite o nome do jogador: ");

    if (nomejogador.trim() === "") {
        console.log("O nome do jogador não pode ficar vazio!");
        return;
    }

    const funcaojogador = prompt("Digite a função do jogador: ");

    const pontosjogador = Number(
        prompt("Digite a pontuação do jogador: ")
    );

    if (isNaN(pontosjogador) || pontosjogador < 0) {
        console.log("Pontuação inválida! O jogador não foi cadastrado.");
        return;
    }

    const recrutar = {
        nome: nomejogador,
        funcao: funcaojogador,
        pontos: pontosjogador
    };

    time.push(recrutar);

    console.log(
        "O jogador " + nomejogador + " foi cadastrado com sucesso!"
    );
}


// -------------------------------------------------------------
// DELETAR USUÁRIO
// -------------------------------------------------------------

function Deletarusuario() {

    if (time.length === 0) {
        console.log("Não há usuários cadastrados para deletar!");
        return;
    }

    const nomedeletado = prompt(
        "Digite o nome do usuário a ser deletado: "
    );

    let indexdeletado = -1;

    for (let i = 0; i < time.length; i++) {

        if (time[i].nome === nomedeletado) {
            indexdeletado = i;
            break;
        }
    }

    if (indexdeletado === -1) {
        console.log("O usuário não foi encontrado no time!");
        return;
    }

    time.splice(indexdeletado, 1);

    console.log(
        "O usuário " + nomedeletado + " foi deletado com sucesso!"
    );
}


// -------------------------------------------------------------
// CALCULAR MÉDIA
// -------------------------------------------------------------

function CalculaMedia() {

    if (time.length === 0) {
        console.log(
            "Não há usuários cadastrados para calcular a média!"
        );
        return;
    }

    let Totalpontos = 0;

    for (let i = 0; i < time.length; i++) {

        Totalpontos = Totalpontos + time[i].pontos;
    }

    const mediapontos = Totalpontos / time.length;

    console.log(
        "A média de pontos da equipe é: " + mediapontos
    );
}


// -------------------------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------------------------

while (continuar === true) {

    Mostraopcoes();

    const opcao = prompt("Digite a opção desejada: ");

    if (opcao === "1") {

        Cadastrarusuario();

    } else if (opcao === "2") {

        Deletarusuario();

    } else if (opcao === "3") {

        Mostrartime();

    } else if (opcao === "4") {

        CalculaMedia();

    } else if (opcao === "5") {

        Atualizarpontuacao();

    } else if (opcao === "6") {

        continuar = false;

        console.log("Saindo do programa...");

    } else {

        console.log(
            "Opção inválida! Digite uma opção válida."
        );
    }
}