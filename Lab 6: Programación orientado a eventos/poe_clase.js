const boton = document.getElementById("boton_disparar");

const disparar_enemigo = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://www.japantimes.co.jp/wp-content/uploads/2016/06/p9-hadfield-deadpool-a-20160602.jpg";
    console.log(imagen);

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

