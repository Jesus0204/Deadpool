const db = require('../util/database');

module.exports = class Wolverine_Message {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(titulo_1, mensaje_1, username_1) {
        this.titulo = titulo_1;
        this.mensaje = mensaje_1;
        this.username = username_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO Mensaje (titulo, mensaje, username) VALUES (?, ?, ?)',
            [this.titulo, this.mensaje, this.username]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos se ejecuta sobre la clase, no un objeto de la clase
    static fetchAll(current_username) {
        return db.execute('SELECT * FROM Mensaje WHERE username = ?', 
        [current_username]);
    }

    static fetchOne(id, current_username) {
        return db.execute('SELECT * FROM Mensaje WHERE idMensaje = ? AND username = ?', 
        [id, current_username]);
    }

    static fetch(id, current_username) {
        if (id) {
            return this.fetchOne(id, current_username);
        } else {
            return this.fetchAll(current_username);
        }
    }

    static search(valor_busqueda, current_username) {
        return db.execute(`SELECT * FROM Mensaje
        WHERE titulo LIKE ? AND username = ? `, ['%' + valor_busqueda + '%', current_username]);
    }

}