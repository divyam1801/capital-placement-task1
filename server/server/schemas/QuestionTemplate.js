const mongoose = require('mongoose');

const QuestionTemplate = new mongoose.Schema({
    id:{
        type:String,
        format:uuid,
    },
    type:{
        type:String,
        require:true
    },
    question:{
        type:String
    },
    choices:{
        type:Array,
        // items:
        //     type:String
    },
    maxChoice:{
        type:integer
    },
    disqualify:{
        type:boolean,
        default: false
    },
    other:{
        type:boolean,
        default: false
    },
},
{timestamps:true}); 

module.exports = mongoose.model("QuestionTemplate",QuestionTemplate);