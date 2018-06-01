const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');




// register(ovo ce biti putanja za register, posto je u file user bice /user/register)
router.post('/register', (req, res, next)=> {
    // new user to smo napravili iz modela
    let newUser = new User({
        // req.body.name ono sto je submitovano u formi
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: "Failed to register user"})
        }else{
            res.json({success:true, msg: "User registered"})
        }
    });
});

// Authenticate
router.post('/authenticate',(req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;

        if(!user){
            return res.json({success:false, msg: "User not found"});
        }
        //password ovo je sifra koju je uneo user,user.password a ovo je sifra od usera u bazi(hashovana(morace da se otpakuje da bi poredili))
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                //kreiramo token
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 //token ce isteci za nedelju dana
                });
                res.json({
                    success:true,
                    token: "Bearer "+token,
                    // napravimo novi objekat od usera da nebi poslali objekat usera sa sifrom
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }else{
                res.json({success: false, msg: "Wrong password"})
            }
        })
    });
});

// Profile       passport.authenticate se stavi ako hocemo da je ruta protektovana, znaci da mora da salje i token u requestu
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    res.json({user: req.user});
});


module.exports = router;