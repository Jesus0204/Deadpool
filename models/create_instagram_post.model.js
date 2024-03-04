const instagram_post = [{
    titulo: "Lo encontre!",
    caption: "Estaba caminando de regreso hacia el universo de Fox.",
    fecha: "1:45 PM - 1 Jan 2024",
    imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2023/07/deadpool-3-wolverine.jpg?quality=100&strip=info&w=940&h=530&crop=1"
}];

module.exports = class Instagram_Post {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(titulo_1, caption_1, fecha_1, imagen_1) {
        this.titulo = titulo_1;
        this.caption = caption_1;
        this.fecha = fecha_1;
        this.imagen = imagen_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        instagram_post.push({
            titulo: this.titulo,
            caption: this.caption,
            fecha: this.fecha, 
            imagen: this.imagen
        }); // Es lo mismo que messages.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos se ejecuta sobre la clase, no un objeto de la clase
    static fetchAll() {
        return instagram_post;
    }
}