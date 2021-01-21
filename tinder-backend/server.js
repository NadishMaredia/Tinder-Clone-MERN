const express = require('express');
const mongoose = require('mongoose');

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:nYrPFSyHYAYPqQcb@cluster0.adelv.mongodb.net/tinderdb?retryWrites=true&w=majority';

//Middlewares

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

//Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));