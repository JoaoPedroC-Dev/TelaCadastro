// INSTÂNCIA DO DOM //
const pegaInfo = {
    nome: document.getElementById ("nameUser"),
    email: document.getElementById ("emailUser"),
    number: document.getElementById ("numberUser"),
    age: document.getElementById ("ageUser"),

}

const button = document.getElementById ("enviarDados")
const response = document.querySelectorAll (".span")

// CLASSE //
class User {
    constructor (nome, email, number, age){
        super(User);
        this.nome = nome;
        this.email = email;
        this.number = number;
        this.age = age;
    }

    exibirResponse(){
        response[0].innerText = this.name;
        response[1].innerText = this.email;
        response[2].innerText = this.number;
        response[3].innerText = this.age;
    }

}

// EVENTOS //
button.addEventListener("click", () => {
    const newInfo = new User (
        nome.value,
        email.value,
        number.value,
        age.value
    );
    
    newInfo.exibirResponse();
});