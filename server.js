const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);