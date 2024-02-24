const express = require('express');

const app = express();

app.use(express.json());

const authRouter = require('./src/auth');
app.use('/auth', authRouter);

const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});