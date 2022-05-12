const db = require('../db/db.js');

module.exports = class Uer {
    constructor(id, first_name, last_name, email, phone, img) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone
        this.img = img;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM sys.user;');
    }

    static get(id) {
        return db.execute('SELECT * FROM sys.user WHERE (id = ?);', [id]);
    }


    static create(first_name, last_name, email, phone, img) {
        return db.execute('INSERT INTO sys.user (first_name, last_name, email, phone, img) VALUES (?, ?, ?, ?, ?);', [first_name, last_name, email, phone, img]);
    }

    static update(id, first_name, last_name, email, phone, img) {
        return db.execute('UPDATE sys.user SET first_name = ?, last_name = ?, email = ?, phone = ?, img = ? WHERE (id = ?);', [first_name, last_name, email, phone, img, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM sys.user WHERE (id = ?);', [id]);
    }
}