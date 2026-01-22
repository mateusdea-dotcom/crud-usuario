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
// indice por ID

function acharIndicePorId(id){
  for (let i = 0; i < people.length; i++){
    if(people[i].id ){
      return i;
    }
  }
  return -1;
}

// cadastro

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

// listar

function listarUsuario(){

    if (people.length === 0) {
    console.log("Nenhum nome cadastrado.");
    return menu();
  }

    for(let i = 0; i < people.length; i++){
      const c = people[i];
      console.log(
          "ID: ", c.id,
          "nome: ", c.nome,
          
      )
  }

  menu();
}

// visualizar

function visualizarUsuario(){
  console.log("Vizualizar Usuário");

  perguntar("Digite o ID: ", (idStr) => {
    const id = Number(idStr);
    if (Number.isNaN(id)) {
      console.log("ERRO!! ID invalido");
      return menu();
    }

    const posicao = acharIndicePorId(id);

    if (posicao === -1) {
      console.log("Usuário não encontrado");
      return menu();
    }

    const peoples = people[posicao];

    console.log(
      "ID: ", peoples.id,
          "| Nome: ", peoples.nome,
          
    )

    menu();
  });

}

function deletarUsuario() {
  console.log("Deletar Usuário");

  perguntar("Digite o ID: ", (idStr) => {
    const id = Number(idStr);
    if(Number.isNaN(id)){
      console.log("Erro: ID invalido");
      return menu();
    }

    const posicao = acharIndicePorId(id);

    if(posicao === -1){
      console.log("Usuário não encontrado");
      return menu();
    }
    people.splice(posicao, 1);
    console.log("Deletado com sucesso");
    menu();

  })
}

// deletar

function deletarUsuario() {
  console.log("Deletar Usuário");

  perguntar("Digite o ID: ", (idStr) => {
    const id = Number(idStr);
    if(Number.isNaN(id)){
      console.log("Erro: ID invalido!");
      return menu();
    }

    const posicao = acharIndicePorId(id);

    if(posicao === -1){
      console.log("Usuário não encontrado");
      return menu();
    }
    people.splice(posicao, 1);
    console.log("Deletado com sucesso");
    menu();

  })
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
            case "3": return visualizarUsuario();
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
