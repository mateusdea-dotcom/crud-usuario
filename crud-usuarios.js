const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log("\n=======================");
    console.log("      CRUD USUÁRIOS      ");
    console.log("=========================");
    console.log("1) Cadastrar Usuário");
    console.log("2) Listar Usuários");
    console.log("3) Visualizar Usuário (por ID)");
    console.log("4) Editar Usuário");
    console.log("5) Deletar Usuário");
    console.log("0) Sair");
    console.log("==========================");
}

function menu(){
    mostrarMenu();

    perguntar("Escolha uma opção: ", (opcao) =>  {
        opcao = opcao.trim();

        switch (opcao) {
            case "1": return cadastrarUsuario();
            case "2": return listarUsuario();
            case "3": return vusualizarUsuario();
            case "4": return editarUsuario();
            case "5": return deletarUsuario();
            case "0":
                console.log("Saindo...");
                rl.close();
                return;
                default:
                    console.log("Opção Inválida!");
        }
    })
}