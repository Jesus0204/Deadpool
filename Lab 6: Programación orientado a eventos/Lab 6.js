const cancel = document.getElementById("boton_cancel")

const cancelar = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://hips.hearstapps.com/hmg-prod/images/deadpool-3-wolverine-65c95b3a552eb.jpg?resize=980:*";

    const title = document.getElementById("title");
    title.innerHTML = "¿Porque lo cancelas bro? ¡Usa el validador!";
}

cancel.onclick = cancelar;

const validar = document.getElementById("boton_validar");

const validar_pass = () => {
    const password_1 = document.getElementById("password_1");
    const password_2 = document.getElementById("password_2");

    const password_1_value = password_1.value;
    const password_2_value = password_2.value;

    const paragraph = document.getElementById("paragraph");

    if ((password_1_value == password_2_value) && password_1_value != "") {
        paragraph.innerHTML = "¡La contraseña es correcta!";
        paragraph.className = "has-text-success";
    }
    else {
        paragraph.innerHTML = "¡Incorrecto! Por favor intenta de nuevo. :)";
        paragraph.className = "has-text-danger-dark";
    }
}

validar.onclick = validar_pass;

const hover = document.getElementById("paragraph_hover");

const hover_function = () => {
    hover.innerHTML = "<img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczloMDB6aWVsY3hxdWUyY21oaHBpbHN2NWoybTJvaG45M2U0aXh5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gFPylNbLqc8bbHtYvJ/giphy.gif'>";
}

const dehover_function = () => {
    hover.className = "has-text-danger-dark";
    hover.innerHTML = "¡Este parráfo es mágico!";
}

hover.onmouseover = hover_function;
hover.onmouseout = dehover_function;