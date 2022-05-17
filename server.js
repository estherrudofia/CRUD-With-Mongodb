const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const path = require('path');

const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env' })

const port = process.env.PORT || 3300;

// log requests with morgan
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engin
app.set('view engine', 'ejs');
// // if there was no views folder and i wanted to use a different folder
// app.set('views', path.resolve(__dirname, 'views/ejs'));


// Load assets
app.use(express.static('assets'));

//load routers
app.use('/', require('./server/routes/router'));

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)});