const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//createdFormByUser Shema
const CreatedFormByUser = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    requiredFields:{
        type: Array
    }

});

const CFBU = module.exports = mongoose.model('CFBU', CreatedFormByUser);


module.exports.getCFBU = function(id, callback){
    CFBU.findById(id, callback);
}



module.exports.addCFBU = function(CFBU, callback){
    CFBU.save(callback);  
}