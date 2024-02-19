const cancel = document.getElementById("boton_cancel")

const cancelar = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://hips.hearstapps.com/hmg-prod/images/deadpool-3-wolverine-65c95b3a552eb.jpg?resize=980:*";

    const title = document.getElementById("title");
    title.innerHTML = "¿Porque lo cancelas? ¡Usa el validador!";
}

cancel.onclick = cancelar;