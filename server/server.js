const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('../database/db');
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');
const uploadRouter = require('./routes/uploadRoutes')
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);
app.use('/upload', uploadRouter);


// localhost:4000/auth/register

const port = 4000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});
