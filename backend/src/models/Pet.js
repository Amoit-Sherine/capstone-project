const knex = require('knex')(require('./../../knexfile').development);

class Pet {
    constructor({ id, user_id, name, type, breed, dob, allergies, medical_history, created_at, updated_at }) {
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.dob = dob;
        this.allergies = allergies;
        this.medical_history = medical_history;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static async create({ user_id, name, type, breed, dob, allergies, medical_history }) {
        const [id] = await knex('pets').insert({
            user_id,
            name,
            type,
            breed,
            dob,
            allergies,
            medical_history,
        });

        return Pet.findById(id);
    }

    static async findById(id) {
        const pet = await knex('pets').where({ id }).first();
        if (!pet) return null;
        return new Pet(pet);
    }

    static async update(id, { name, type, breed, dob, allergies, medical_history }) {
        await knex('pets').where({ id }).update({
            name,
            type,
            breed,
            dob,
            allergies,
            medical_history
        });

        return Pet.findById(id);
    }

    static async delete(id) {
        await knex('pets').where({ id }).del();
        return { message: "Pet deleted successfully" };
    }
}

module.exports = Pet;