const express = require('express');
const router = express.Router();
const FormData = require('../models/formData');
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const CFBU = require('../models/createdFormByUser');


// register(ovo ce biti putanja za register, posto je u file user bice /user/register)
router.post('/formCreation', passport.authenticate('jwt', {session:false}), (req, res, next)=> {
    if (!user) { return res.redirect('/login'); }
    // new user to smo napravili iz modela
    let newFormData = new FormData({
        // req.body.name ono sto je submitovano u formi
        formDataUserId: req.body.formDataUserId,
        companyName: req.body.companyName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        familyName: req.body.familyName,
        dateOfBirth: req.body.dateOfBirth,
        maritalStatus: req.body.maritalStatus,
        countryOfResidence: req.body.countryOfResidence,
        addressOfResidence: req.body.addressOfResidence,
        eMail: req.body.eMail,
        phoneNumber: req.body.phoneNumber,
        serviceInterestedIn: req.body.serviceInterestedIn,
        additionalServicesRequired: req.body.additionalServicesRequired,
        notes: req.body.notes
    });
    // console.log('submitedFormUserId: ' + newFormData.formDataUserId);
    FormData.addFormData(newFormData, (err, formData) => {
        if(err){
            res.json({success: false, msg: "Failed to submit form"})
        }else{
            res.json({success:true, msg: "Form submited successful"})
        }
    });
});

router.get('/form', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    if (!user) { return res.redirect('/login'); }
    res.json({user: req.user});
});


router.get('/form/:userId', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    if (!user) { return res.redirect('/login'); }
    FormData.find({formDataUserId: req.params.userId}, (err, data) =>{
        // console.log('ovo je sta se vraca za finalFormId: ' + req.params.finalFormUserId)
        if(!data){
            return res.json({success: false, msg: "Failed to load all data"});
        }else{
            // console.log("data retreved");
            return res.json(data);
        }
    })
});


router.post('/formCreatedByUser', passport.authenticate('jwt', {session:false}), (req, res, next)=> {
    if (!user) { return res.redirect('/login'); }
    // new user to smo napravili iz modela
    let newFormCreatedByUser = new CFBU({
        userId:req.body.requestedUserId,
        requiredFields:req.body.fields,
    });
    // console.log(newFormCreatedByUser.userId);
    // console.log(newFormCreatedByUser.requiredFields);
    CFBU.addCFBU(newFormCreatedByUser, (err, CFBU) => {
        if(err){
            res.json({success: false, msg: "Failed to create form"})
        }else{
            res.json({success:true, CFBU, msg: "Form created successful"})
            // console.log(CFBU._id)
        }
    });
});


router.get('/formCreatedByUser', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    if (!user) { return res.redirect('/login'); }
    res.json({user: req.user});
});



router.get('/finalForm/:finalFormId', (req, res)=>{
    // console.log('finalFormId: '+ req.params.finalFormId);
    // req.params.finalFormId ovo je da bi dobili parametar iz url :finalFormId
    CFBU.getCFBU(req.params.finalFormId, (err, data) =>{
        // console.log('ovo je sta se vraca za finalFormId: ' + data)
        if(!data){
            return res.json({success: false, msg: "Failed to load form"});
        }else{
            // console.log("data retreved");
            return res.json(data);
        }
    })


});


router.get('/finalForm/data/:finalFormUserId', passport.authenticate('jwt', {session:false}), (req, res)=>{
    if (!user) { return res.redirect('/login'); }
    // console.log('finalFormId: '+ req.params.finalFormId);
    // req.params.finalFormId ovo je da bi dobili parametar iz url :finalFormId
    CFBU.find({userId:req.params.finalFormUserId}, (err, data) =>{
        // console.log('ovo je sta se vraca za finalFormId: ' + req.params.finalFormUserId)
        if(!data){
            return res.json({success: false, msg: "Failed to load all data"});
        }else{
            // console.log("data retreved");
            return res.json(data);
        }
    })


});

module.exports = router;


