const express = require('express');
const app = express();
require('../models/config');
const postsRoutes = require('../routes/controller');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/', postsRoutes);

app.listen(3000, () => console.log('Server started: 3000'));