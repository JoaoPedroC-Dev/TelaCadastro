// INSTÂNCIA DO DOM //
const pegaInfo = {
    nome: document.getElementById ("nameUser"),
    email: document.getElementById ("emailUser"),
    number: document.getElementById ("numberUser"),
    age: document.getElementById ("ageUser"),

}

const exibirResponse = document.getElementById ("response")
const button = document.getElementById ("enviarDados")
const response = document.querySelectorAll (".span")
const buttonExcluir = document.getElementById("excluir")
const buttonEditar = document.getElementById ("editar")


// CLASSE //
class User {
    constructor (nome, email, number, age){
        this.nome = nome;
        this.email = email;
        this.number = number;
        this.age = age;
    }

    exibirResponse(){
        response[0].innerText = this.nome;
        response[1].innerText = this.email;
        response[2].innerText = this.number;
        response[3].innerText = this.age;
    }

    apagarResponse(){
        response[0].innerText = this.nome
        response[1].innerText = this.email
        response[2].innerText = this.number
        response[3].innerText = this.age
    }
}

// EVENTOS //
button.addEventListener("click", () => {
    const newInfo = new User (
        pegaInfo.nome.value,
        pegaInfo.email.value,
        pegaInfo.number.value,
        pegaInfo.age.value
    );
    
    newInfo.exibirResponse();
});

buttonExcluir.addEventListener("click", () => {
    const cleanInfo = new User (
        pegaInfo.nome.nodeValue,
        pegaInfo.email.nodeValue,
        pegaInfo.number.nodeValue,
        pegaInfo.age.nodeValue
    );
    
    cleanInfo.apagarResponse();
});

