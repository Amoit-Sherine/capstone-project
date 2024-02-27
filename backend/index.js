const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors())

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const authRouter = require('./src/auth');
app.use('/auth', authRouter);

const petsRouter = require('./src/pets');
app.use('/pets', authenticateToken, petsRouter);

const appointmentsRouter = require('./src/appointments');
app.use('/appointments', authenticateToken, appointmentsRouter);

const profileRouter = require('./src/profile');
app.use('/profile', authenticateToken, profileRouter);

const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});