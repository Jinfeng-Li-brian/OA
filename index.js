const express = require('express');

const usersRoutes = require('./routes/user');

const app = express();

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', usersRoutes);

app.listen(8080, () => console.log("starting on port 8080"));

