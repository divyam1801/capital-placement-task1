const mongoose = require('mongoose');

const PersonalInformationTemplate = new mongoose.Schema({
    internaUse:{
        type:boolean,
        default: false
    },
    show:{
        type:boolean,
        default: true
    },
},
{timestamps:true}); 

module.exports = mongoose.model("PersonalInformationTemplate",PersonalInformationTemplate);