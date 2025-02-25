const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://skchamith99:1208mongoDB@cluster0.4fwn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//connect function

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('MongoDB Error', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);