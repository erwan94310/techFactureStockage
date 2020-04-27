const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//import routes

const authroute = require('./routes/auth');
const postRoute = require('./routes/posts');

doten.config();

//Coenct to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () =>
	console.log('connected to db ! ')
);

//middleWare
app.use(express.json());
//route Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(3000, () => console.log('Serveur Up and running'));

