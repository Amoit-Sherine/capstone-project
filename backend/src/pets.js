const express = require('express');
const Pet = require('./models/Pet');
const {format} = require("date-fns");
require('dotenv').config();

const router = express.Router();

// Create Pet
router.post('/', async (req, res) => {
    try {
        const { name, type, breed, dob, allergies, medical_history } = req.body;

        if(!(name && type && breed && dob)){
            return res.status(400).send({ message: 'Missing some data' });
        }

        const pet = await Pet.create({ ...req.body, user_id: req.user.userId });
        res.json(pet);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Server error' });
    }
});

// Get a user's pets
router.get('/', async (req, res) => {
    try {
        const userId = req.user.userId;
        const pets = await Pet.findByUserId(userId);

        for (let i = 0; i < pets.length; i++) {
            pets[i].dob = format(new Date(pets[i].dob), 'yyyy-MM-dd');
        }

        res.json(pets);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" });
    }
});

// Get a single pet
router.get('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if(!pet){
            return res.status(404).send({ message: 'Pet not found' });
        }

        if (pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this pet' });
        }

        res.json(pet);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Server error' });
    }
});

// Update a pet
router.put('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if(!pet){
            return res.status(404).send({ message: 'Pet not found' });
        }

        if (pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this pet' });
        }

        const newPet = await Pet.update(req.params.id, req.body);

        res.json(newPet);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Error updating pet" });
    }
});

// Delete a Pet
router.delete('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if(!pet){
            return res.status(404).send({ message: 'Pet not found' });
        }

        if (pet.user_id !== req.user.userId) {
            return res.status(403).send({ message: 'Not authorized to access this pet' });
        }

        await Pet.delete(req.params.id);

        res.send({ message: "Pet deleted successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Server error' });
    }
});

module.exports = router;