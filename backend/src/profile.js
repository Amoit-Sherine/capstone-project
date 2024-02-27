const express = require('express');
const router = express.Router();
require('dotenv').config();

const User = require('./models/User');

router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

router.post('/', async (req, res) => {
    const { name, age, hobbies, location } = req.body;

    try {
        if(!(name)){
            return res.status(400).send({ message: 'Name cannot be blank' });
        }

        const updatedUser = User.update(req.user.userId,{ name, age, hobbies, location })

        res.send({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }

});

module.exports = router;
