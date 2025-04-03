// Selecciona el formulario con la clase "my-form"
let loginForm = document.querySelector(".my-form");

// Agrega un único evento "submit" al formulario
loginForm.addEventListener("submit", (e) => {
    // Previene el comportamiento predeterminado del formulario (recargar la página)
    e.preventDefault();

    // Obtiene el valor del campo de entrada con id "username"
    let username = document.getElementById("username"); 
    // Obtiene el valor del campo de entrada con id "password"
    let password = document.getElementById("password");

    // Muestra en la consola los valores ingresados en los campos de username y password
    console.log('Username:', username.value);
    console.log('Password:', password.value);

    // Aquí se procesarían los datos y se enviarían a una API
});