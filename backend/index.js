const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();

app.use(express.json());c

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

const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});