const express = require('express');
const Appointment = require('./models/Appointment');
const Pet = require("./models/Pet");
const {format} = require("date-fns");
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { pet_id, type, date_time, location } = req.body;
    try {
        if(!(pet_id && type && date_time && location)){
            return res.status(400).send({ message: 'Missing some data' });
        }

        const pet = await Pet.findById(pet_id);

        if(!pet){
            return res.status(404).send({ message: 'Pet not found' });
        }

        if (pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this pet' });
        }

        let formatted_date_time = format(new Date(date_time), 'yyyy-MM-dd HH:mm:ss');

        const newAppointment = await Appointment.create({ pet_id, type, date_time: formatted_date_time, location });
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        let appointments = await Appointment.findForUser(req.user.userId);

        for (let i = 0; i < appointments.length; i++) {
            appointments[i] = await Appointment.loadPet(appointments[i]);
            appointments[i].date = format(new Date(appointments[i].date_time), 'yyyy-MM-dd HH:mm');
        }

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if(!appointment){
            return res.status(404).send({ message: 'Appointment not found' });
        }

        await appointment.loadPet()

        if (appointment.pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this appointment' });
        }

        res.json(appointment);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Server error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { type, date_time, location } = req.body;

    try {
        const appointment = await Appointment.findById(id);

        if(!appointment){
            return res.status(404).send({ message: 'Appointment not found' });
        }

        // Load the associated pet
        await appointment.loadPet()

        if (appointment.pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this appointment' });
        }

        const updatedAppointment = await Appointment.update(id, { type, date_time, location });
        res.json(updatedAppointment);
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Server error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findById(id);

        if(!appointment){
            return res.status(404).send({ message: 'Appointment not found' });
        }

        // Load the associated pet
        await appointment.loadPet()

        if (appointment.pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this appointment' });
        }

        await Appointment.delete(id);

        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});

module.exports = router;