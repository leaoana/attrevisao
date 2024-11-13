
const abrirmodal = document.querySelector("#abrir")
const fecharmodal = document.querySelector("#fechar")
const modal = document.querySelector("#modal")

function abrirFechar() {
  modal.classList.toggle("show")
}

function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
    localStorage.setItem("mascara_telefone", tel_formatado);
}

function mascara_cpf() {
    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }
    localStorage.setItem("mascara_cpf", cpf_formatado);
}

function guardanome() {
    var nome = document.getElementById("nome").value
    localStorage.setItem("nome", nome)
}

function guardaemail() {
    var email = document.getElementById("email").value
    localStorage.setItem("email", email)
}

function guardasenha() {
    var senha = document.getElementById("senha").value
    localStorage.setItem("senha", senha)
}

addEventListener("DOMContentLoaded", function(){
    let nome = localStorage.getItem("nome")
    document.getElementById('nome').value = nome

    let email = localStorage.getItem("email")
    document.getElementById('email').value = email

    let telefone = localStorage.getItem("mascara_telefone")
    document.getElementById('telefone').value = telefone

    let cpf = localStorage.getItem("mascara_cpf")
    document.getElementById('cpf').value = cpf

    let senha = localStorage.getItem("senha")
    document.getElementById('senha').value = senha
})