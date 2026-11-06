function entrar() {
  const usuario = document.getElementById("email").value.trim().toLowerCase();
  const senha = document.getElementById("password").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === "artista@gmail.com" && senha === "123456") {
    window.location.href = "../index-artista/index-artista.html";
  } else {
    mensagem.textContent = "E-mail e senha não batem.";
  }
}

function trocarPagina() {
  window.location.href = "login-ouvinte.html";
}

function cadastrar() {
  window.location.href = "../cadastro/cadastro.html";
}

function esqueci_senha(){
  window.location.href = "recuperar.html";
}
