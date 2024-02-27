const knex = require('knex')(require('./../../knexfile').development);

class User {
    constructor(id, name, email, passwordHash, age = null, hobbies = null, location = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.age = age;
        this.hobbies = hobbies;
        this.location = location;
    }

    static async create({ name, email, passwordHash, age, hobbies, location }) {
        const [id] = await knex('users').insert({
            name,
            email,
            password: passwordHash,
            age,
            hobbies,
            location
        });

        return new User(id, name, email, passwordHash, age, hobbies, location);
    }

    static async findByEmail(email) {
        const user = await knex('users').where({ email }).first();
        if (!user) return null;

        return new User(user.id, user.name, user.email, user.password, user.age, user.hobbies, user.location);
    }

    static async findById(id) {
        const user = await knex('users').where({ id }).first();
        if (!user) return null;

        return new User(user.id, user.name, user.email, user.password, user.age, user.hobbies, user.location);
    }

    static async update(id, { name, age, hobbies, location }) {
        await knex('users').where({ id }).update({
            name,
            age,
            hobbies,
            location
        });

        return User.findById(id);
    }
}

module.exports = User;
