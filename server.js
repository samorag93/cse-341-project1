const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Acces-control-Allow-Origin', '*');
    res.setHeader(
        'Acces-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
});
