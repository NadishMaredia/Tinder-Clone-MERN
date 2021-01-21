const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./dbCards');
const Cors = require('cors')
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:nYrPFSyHYAYPqQcb@cluster0.adelv.mongodb.net/tinderdb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());
//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to Db..'))
    .catch((err) => console.log(`Error: ${err}`));

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello from node');
});

app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/tinder/card', (req, res) => {
    const dbCards = req.body;

    Cards.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));