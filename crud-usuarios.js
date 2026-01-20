const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let people = [];
let id = 1;

function perguntar(texto, callback) {
  rl.question(texto, callback);
}


function cadastrarUsuario() {
  console.log("\nCadastrar Usuário");

  perguntar("Nome: ", (nome) => {
   
          nome = nome.trim();
          if (!nome) {
            console.log("ERRO: Dados inválidos!");
            return menu();
          }
          const peoples = {
            id : id++,
            nome: nome,
        }
        people.push(peoples)
        id++
        console.log("nome cadastrado com sucesso! ID: ", peoples.id);

          menu();
        });
}



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
                    menu();
                    return;
        }
    })
}

menu();
