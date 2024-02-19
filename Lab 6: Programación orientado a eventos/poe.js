const boton = document.getElementById("boton_disparar");

boton.onclick = () => {
    const imagen = document.getElementById("imagen_disparar");
    imagen.src = "https://www.japantimes.co.jp/wp-content/uploads/2016/06/p9-hadfield-deadpool-a-20160602.jpg";
    console.log(imagen);
};