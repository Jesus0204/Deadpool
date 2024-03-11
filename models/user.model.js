const db = require('../util/database');

module.exports = class Usuario {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(username_1, password_1) {
        this.username = username_1;
        this.password = password_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO Usuario (username, password) VALUES (?, ?)',
            [this.username, this.password]
        );
    }

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM Usuario WHERE username=? AND password=?',
            [username, password]);
    }
}