const mongoose = require('mongoose');

const ProfileTemplate = new mongoose.Schema({
    mandatory:{
        type:boolean,
        default: true
    },
    show:{
        type:boolean,
        default: true
    },
},
{timestamps:true}); 

module.exports = mongoose.model("ProfileTemplate",ProfileTemplate);