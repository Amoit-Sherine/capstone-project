const knex = require('knex')(require('./../../knexfile').development);
const Pet = require("./Pet");

class Appointment {
    constructor({ id, pet_id, type, date_time, location }) {
        this.id = id;
        this.pet_id = pet_id;
        this.type = type;
        this.date_time = date_time;
        this.date = date_time;
        this.location = location;
    }

    static async loadPet(appointment){
        appointment.pet = await Pet.findById(appointment.pet_id);
        return appointment
    }

    static async create({ pet_id, type, date_time, location }) {
        const [id] = await knex('appointments').insert({
            pet_id,
            type,
            date_time,
            location
        });

        return new Appointment({ id, pet_id, type, date_time, location });
    }

    static async findById(id) {
        const appointment = await knex('appointments').where({ id }).first();
        if (!appointment) return null;
        return new Appointment(appointment);
    }

    static async findByPetId(pet_id) {
        return knex('appointments').where({ pet_id });
    }

    static async findForUser(user_id){
        return knex('appointments')
            .join('pets', 'pets.id', '=', 'appointments.pet_id')
            .where({user_id})
            .select('appointments.*');
    }

    static async update(id, { pet_id, type, date_time, location }) {
        await knex('appointments').where({ id }).update({
            pet_id,
            type,
            date_time,
            location
        });

        return Appointment.findById(id);
    }

    static async delete(id) {
        await knex('appointments').where({ id }).del();
        return { message: "Appointment deleted successfully" };
    }

}

module.exports = Appointment;
