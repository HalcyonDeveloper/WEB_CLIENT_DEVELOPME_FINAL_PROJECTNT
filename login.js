document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar la contraseña (esto es solo un ejemplo)
    if (password === "contraseña") {
        // Redireccionar al usuario a la página de inicio
        window.location.href = "inicio.html";
    } else {
        alert("Credenciales incorrectas. Intenta de nuevo.");
    }
})

const colors = ['#5c55e6', '#4b1c8b', '#001f6a', '#FF5733', '#33FF57', '#5733FF', '#FF3366', '#33CCFF'];
let currentIndex = 0;

function changeBackgroundColor() {
  const elementsToChange = document.querySelectorAll('section .color');
  const newColor = colors[currentIndex];
  
  elementsToChange.forEach((element, index) => {
    element.style.transition = 'background 2s'; // Transición de 2 segundos
    element.style.background = newColor;
  });

  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000);
;
