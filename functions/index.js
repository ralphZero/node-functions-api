const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the FireVerse!!🔥')
})

app.get('/api', (req, res) => {
    res.send('Welcome to the FireVerse V2!!')
})


exports.api = functions.https.onRequest(app);