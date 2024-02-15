const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const itemRoutes = require('./routes/general');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use(itemRoutes);


sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    })
