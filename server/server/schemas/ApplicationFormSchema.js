const mongoose = require('mongoose');
const PersonalInformationTemplate = require("./PersonalInformationTemplate");
const ProfileTemplate = require('./ProfileTemplate');
const QuestionTemplate = require('./QuestionTemplate')

const ApplicationFormSchema = new mongoose.Schema({
    coverImage:{
        type:String,
    },
    personalInformation: {
        type:PersonalInformationTemplate
    },
    personalInformation: {
        type:PersonalInformationTemplate
    },
    personalInformation: {
        type:PersonalInformationTemplate
    },
},
{timestamps:true}); 

module.exports = mongoose.model("ApplicationFormSchema",ApplicationFormSchema);