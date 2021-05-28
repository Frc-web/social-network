const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const path = require ('path');
const cors = require('cors');
require('./config/db.js');

const postRoutes = require('./routes/post');
const shareRoutes = require('./routes/share');
const userRoutes = require('./routes/user');
const bioRoutes = require('./routes/bio');

const app = express();

app.use(cors());

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));  

app.use('/api/post', postRoutes);
app.use('/api/share', shareRoutes);
app.use('/api/user', userRoutes);
app.use('/api/bio', bioRoutes);

module.exports = app;