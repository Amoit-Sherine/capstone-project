const knex = require('knex')(require('./../../knexfile').development);

class Pet {
    constructor({ id, userId, name, type, breed, dob, allergies, medicalHistory, createdAt, updatedAt }) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.dob = dob;
        this.allergies = allergies;
        this.medicalHistory = medicalHistory;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static async create({ userId, name, type, breed, dob, allergies, medicalHistory }) {
        const [newPet] = await knex('pets').insert({
            user_id: userId,
            name,
            type,
            breed,
            dob,
            allergies,
            medical_history: medicalHistory,
        }).returning('*');
        return new Pet(newPet);
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