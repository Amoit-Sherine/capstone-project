const knex = require('knex')(require('./../../knexfile').development);

class User {
    constructor(id, name, email, passwordHash) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    static async create({ name, email, passwordHash }) {
        const [id] = await knex('users').insert({
            name,
            email,
            password: passwordHash
        });

        return new User(id, name, email, passwordHash);
    }

    static async findByEmail(email) {
        const user = await knex('users').where({ email }).first();
        if (!user) return null;

        return new User(user.id, user.name, user.email, user.password);
    }
}

module.exports = User;
