const mongoose = require('mongoose');
const config = require('../config/database');


//formData scheme
const FormDataSchema = mongoose.Schema({
    formDataUserId:{
        type:String,
    },
    companyName:{
        type: String
    },
    firstName:{
        type:String,
    },
    middleName:{
        type:String,
    },
    familyName:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    maritalStatus:{
        type:String,
    },
    countryOfResidence:{
        type:String,
    },
    addressOfResidence:{
        type:String,
    },
    eMail:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
    },
    serviceInterestedIn:{
        type:Array
    },
    additionalServicesRequired:{
        type:String
    },
    notes:{
        type:String
    }
});


const FormData = module.exports = mongoose.model('FormData', FormDataSchema);

module.exports.getformDatarById = function(formDataUserId, callback){
    formData.findById(formDataUserId, callback);
}


module.exports.addFormData = function(formData, callback){
    formData.save(callback);  
}


