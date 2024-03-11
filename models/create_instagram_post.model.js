const db = require('../util/database');

module.exports = class Instagram_Post {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(titulo_1, caption_1, imagen_1, username_1) {
        this.titulo = titulo_1;
        this.caption = caption_1;
        this.imagen = imagen_1;
        this.username = username_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO Insta_Post (titulo, caption, imagen, username) VALUES (?, ?, ?, ?)',
            [this.titulo, this.caption, this.imagen, this.username]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos se ejecuta sobre la clase, no un objeto de la clase
    static fetchAll() {
        return db.execute('SELECT * FROM Insta_Post WHERE username=?',
        [this.username]);
    }
}