const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(username_1, password_1) {
        this.username = username_1;
        this.password = password_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //Dentro del método del modelo que crea el usuario
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(
                'INSERT INTO Usuario (username, password) VALUES (?, ?)',
                [this.username, password_cifrado]
            );
        })
        .catch((error) => console.log(error));
    }

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM Usuario WHERE username=? AND password=?',
            [username, password]);
    }
}