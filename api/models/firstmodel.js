const mongoose = require('mongoose')
const { valid } = require('semver')
const validator = require('validator')
const Schema = mongoose.Schema
 
const FirstSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required:true,
        maxlength: 50
    },
    phone:{
        type: String,
        trim: true,
        // unique: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        // unique : true,
        // validate:{
        //     validator:(v) =>{
        //         return valid.isEmail(v)
        //     },
        //     message:`{VALUE} is not an email`
        // }
    }
})
const FirstModel = mongoose.model('FirstModel', FirstSchema);
module.exports = FirstModel;