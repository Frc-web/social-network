const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const path = require ('path');
const cors = require('cors');

const con = require('./config/db.js');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));  

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;