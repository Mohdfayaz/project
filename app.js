const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); 
app.use(cors({
    origin: '*', // Allow all origins
    credentials: true
}));

app.use('/api/v1/auth',authRouter);

module.exports = app;