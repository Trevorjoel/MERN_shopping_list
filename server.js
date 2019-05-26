const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();

// Body parser middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI; // DB config

// Connect to Mongo DB
mongoose // Promise based
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// use Routes
app.use('/api/items', items); // Make anything that goes to the api '/api/items' refer to the items variable

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on: ${port}`));