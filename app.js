import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from './routes/products.js';
import bodyParser from 'body-parser';


const app = express();

//MIDLWARE
app.use(bodyParser.json());
app.use('/products', router) 


//ROUTES
app.get('/', (req, res) => {
	res.send('Hello MockPI NODE Js!');
});

app.get('/products', (req, res) => {
	res.send('Hello from /products endpoint!');
});

//connect to DB
mongoose.connect(process.env.MONGO_URI, () => {
	console.log('Connected to Mongo DB!!');
});
console.log(process.env.MONGO_URI);

//start the server - on port
app.listen(3000);
