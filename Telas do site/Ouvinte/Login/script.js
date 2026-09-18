const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("password").value;

    const emailCorreto = "ouvinte@email.com";
    const senhaCorreta = "123456";

    if (usuario === emailCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso! Redirecionando...");
        window.location.href = "ouvinte.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
