const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const User = require('./models/User');

// Secret key for JWT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if(!(email && password)){
            return res.status(400).send({ message: 'Missing some data' });
        }

        // Check if the user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).send({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create the user
        const user = await User.create({ name, email, passwordHash });

        // Generate a token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY);

        res.send({ message: 'Registration successful', token });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if(!(email && password)){
            return res.status(400).send({ message: 'Missing some data' });
        }

        // Find the user by email
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).send({ message: 'User with the email not found' });
        }

        // Verify the password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials'});
        }

        // Generate a token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY);

        res.send({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }

});

module.exports = router;
