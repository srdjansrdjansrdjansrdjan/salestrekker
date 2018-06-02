const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


const app = express();
// const port = 3000;
// ovo je port za heroku sajt da tamo deplojujem app
const port = process.env.PORT || 3000;

//connect to database
mongoose.connect(config.database);

//kad se konektuje
mongoose.connection.on('connected', () => {
    console.log("connected to database " + config.database);
});

//ako ima error kad se konektuje na bazu
mongoose.connection.on('error', () => {
    console.log("database error " + err);
});

// da bi saobracaj sa /users isao na ovaj file(route)       u kom se folderu nalazi file koji ima user funkcionalnosti
const users = require("./routes/users");
const formData = require('./routes/formsData');

// cors() sluzi da omogucimo saobracaj sa drugih domena kod nas ce angular biti drugi domen
app.use(cors());

// Set static folder
// __dirname je current directory
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);



//sve sto ima  /users u url adresi ide na file users iz routes foldera
app.use("/users", users);
app.use("/form", formData);

// ovo smo napisali da nebi imali error na startu
// app.get('/',(req, res) => {
//     res.send('invalid endpoint');
// });



// app.get('*', (req, res) => {
//     // res.redirect('/');
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// start server
app.listen(port, () => {
    console.log("server started on port "+port);
});