document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensajeLogin = document.getElementById("mensajeLogin");

  // Validación simple (ejemplo)
  if (usuario === "admin" && password === "1234") {
    mensajeLogin.textContent = "¡Bienvenido, administrador!";
    mensajeLogin.style.color = "green";
  } else {
    mensajeLogin.textContent = "Usuario o contraseña incorrectos.";
    mensajeLogin.style.color = "red";
  }
});
