// INSTÂNCIA DO DOM //
const pegaInfo = {
    nome: document.getElementById ("nameUser"),
    email: document.getElementById ("emailUser"),
    number: document.getElementById ("numberUser"),
}

const exibirResponse = document.getElementById ("response")
const button = document.getElementById ("enviarDados")
const response = document.querySelectorAll (".span")
const buttonExcluir = document.getElementById("excluir")
const buttonEditar = document.getElementById ("editar")

// FUNÇÕES //
const registros = [];

// CLASSE //
class User {
    constructor (nome, email, number){
        this.nome = nome;
        this.email = email;
        this.number = number;
    }

    exibirResponse(){
        response[0].innerText = this.nome;
        response[1].innerText = this.email;
        response[2].innerText = this.number;
    }

    apagarResponse(){
        response[0].innerText = this.nome;
        response[1].innerText = this.email;
        response[2].innerText = this.number;
    }

}

// EVENTOS //
button.addEventListener("click", () => {
    const newInfo = new User (
        pegaInfo.nome.value,
        pegaInfo.email.value,
        pegaInfo.number.value,
    );
  
    newInfo.exibirResponse();
    exibirResponse.style.display = "flex"

});

buttonExcluir.addEventListener("click", () => {

    const cleanInfo = new User (
        pegaInfo.nome.nodeValue,
        pegaInfo.email.nodeValue,
        pegaInfo.number.nodeValue,
    );
    
    cleanInfo.apagarResponse();
    exibirResponse.style.display = "none"
})
