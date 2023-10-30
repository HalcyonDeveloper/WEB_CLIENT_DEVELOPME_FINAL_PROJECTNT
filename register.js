document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Aquí deberías almacenar los datos del nuevo usuario en una base de datos o en una estructura de datos en el servidor.
    // Esto es solo un ejemplo básico de cómo podrías hacerlo en JavaScript.

    var newUser = {
        username: newUsername,
        password: newPassword
    };

    // Almacena el usuario en una estructura de datos (esto es solo un ejemplo)
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "index.html"; // Redireccionar al usuario a la página de inicio de sesión
});
