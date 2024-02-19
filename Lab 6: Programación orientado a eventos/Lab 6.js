const cancel = document.getElementById("boton_cancel")

const cancelar = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://hips.hearstapps.com/hmg-prod/images/deadpool-3-wolverine-65c95b3a552eb.jpg?resize=980:*";

    const title = document.getElementById("title");
    title.innerHTML = "¿Porque lo cancelas bro? ¡Usa el validador!";
    title.className = "is-size-1 is-family-sans-serif";
}

cancel.onclick = cancelar;

const validar = document.getElementById("boton_validar");

const validar_pass = () => {
    const password_1 = document.getElementById("password_1");
    const password_2 = document.getElementById("password_2");

    const password_1_value = password_1.value;
    const password_2_value = password_2.value;

    const paragraph = document.getElementById("paragraph");

    if (password_1_value == password_2_value) {
        paragraph.innerHTML = "¡La contraseña es correcta!";
        paragraph.className = "has-text-success";
    }
    else {
        paragraph.innerHTML = "¡Incorrecto! Por favor intenta de nuevo. :)";
        paragraph.className = "has-text-danger-dark";
    }
}

validar.onclick = validar_pass;