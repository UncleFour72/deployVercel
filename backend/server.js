// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';
mongoose.connect(MONGO_URI).then(()=>console.log('Mongo connected'));

app.get('/api/ping', (req,res)=> res.json({ok:true, time:Date.now()}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on', PORT));
