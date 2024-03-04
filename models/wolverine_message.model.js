const messages = [
  {
    titulo: "¡¿Help?!", 
    mensaje: "Don't just stand there you ape! Get over here and give me a hand!"
  }
];

module.exports = class Wolverine_Message {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(titulo_1, mensaje_1) {
        this.titulo = titulo_1;
        this.mensaje = mensaje_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        messages.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); // Es lo mismo que messages.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos se ejecuta sobre la clase, no un objeto de la clase
    static fetchAll() {
        return messages;
    }

}