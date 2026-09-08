document.getElementById("formRegistro").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const mensaje = document.getElementById("mensaje");

  if (edad < 18) {
    mensaje.textContent = "Debes tener al menos 18 años para registrarte.";
    mensaje.style.color = "red";
    return;
  }

  if (correo.endsWith("@duoc.cl")) {
    mensaje.textContent = `¡Registro exitoso, ${nombre}! Obtienes un 20% de descuento por ser estudiante DUOC.`;
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = `¡Registro exitoso, ${nombre}!`;
    mensaje.style.color = "green";
  }
});
