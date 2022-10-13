require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoConnect = require('./db/connection.js');
const router = require('./routes/index.js');

app.use(cors());
app.use(express.json());

mongoConnect.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(
            `Connected to the DB. 🚀 Server running on port ${process.env.PORT || 4000
            }`
        );
    });
});

app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('App Server Running!');
});