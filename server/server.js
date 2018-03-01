require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}` ) );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

massive(process.env.CONNECTION_STRING)
.then(db => {console.log('database connected')
app.set('db', db)})
.catch(err => console.error(err));


app.post(`/api/post/user`, controller.createUser);
app.post(`/api/get/user`, controller.login);
app.post(`/api/post/property`, controller.postProperty);
app.get('/api/get/properties/:id', controller.getProps);
app.post(`/api/logout`, controller.logout);
app.get('/api/get/filter', controller.getProperties);

const PORT = process.env.PORT || 3020
app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );