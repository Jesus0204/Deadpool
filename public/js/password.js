const boton = document.getElementById("boton_disparar");

const disparar_enemigo = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://www.japantimes.co.jp/wp-content/uploads/2016/06/p9-hadfield-deadpool-a-20160602.jpg";

    boton.innerHTML = "Matar Enemigo";
    boton.className = "button is-danger is-light";
    boton.onclick = matar_enemigo;

}

boton.onclick = disparar_enemigo;

const matar_enemigo = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://variety.com/wp-content/uploads/2020/08/deadpool.jpg?w=1000&h=563&crop=1&resize=1000%2C563";

    boton.innerHTML = "Rematar Enemigo";
    boton.className = "button is-danger";

    boton.onclick = rematar_enemigo;

}

const rematar_enemigo = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*";

    boton.innerHTML = "Disparar Enemigo";
    boton.className = "button is-primary";

    boton.onclick = disparar_enemigo;
}

const casa = document.getElementById("boton_casa")

const Esta_es_mi_casa = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://www.branding.news/wp-content/uploads/2018/05/deadpool-cover.jpg";
    casa.innerHTML = "¿Qué haces en mi casa?";
}

casa.onclick = Esta_es_mi_casa;

const cancel = document.getElementById("boton_cancel");
const validar_dis = document.getElementById("boton_validar");
validar_dis.disabled = true;

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

const password_1 = document.getElementById("password_1");

const validacion_caracteres = () => {
    const hidden = document.getElementById("hidden_text");
    const hidden_2 = document.getElementById("hidden_text_2");
    const pass_value = password_1.value;

    if (seguridad(pass_value) == false){
        validar_dis.disabled = true;
        hidden.classList.remove("is-hidden");
        hidden_2.classList.add("is-hidden");
    }
    else if (seguridad(pass_value) == true){
        hidden.classList.add("is-hidden");
        validar_dis.disabled = false;
        hidden_2.classList.remove("is-hidden");

    }
}

function seguridad(pass_value) {
    // Length de password
    if (pass_value.length <= 7){
        return false;
    }

    // Números
    const numeros = /[0-9]/;
    if (numeros.test(pass_value) == false){
        return false;
    }

    // Mayusculas y minisculas
    const mayusculas = /[A-Z]/;
    const minisculas = /[a-z]/;
    if (mayusculas.test(pass_value) == false){
        return false;
    }
    if (minisculas.test(pass_value) == false){
        return false;
    }

    // Caracteres especiales
    const caracteres_especiales = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
    if (caracteres_especiales.test(pass_value) == false) {
        return false;
    }

    // Regresa True si todo lo anterior es cierto
    return true;

}

password_1.onkeyup = validacion_caracteres;