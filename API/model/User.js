/**
 * Created by Aditya on 03-Jul-17.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    phoneNumber : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    is_verified: {
        type : Boolean
    },
    created_at: {
        type : Date
    },
    updated_at: {
        type : Date
    }
},
    {
        versionKey : false
    });

UserSchema.pre('save' , function (next) {
    if(this.isNew || this.isModified('password')){
        this.password = "yupp modified"
    }
    let currDate = new Date();
    this.updated_at = currDate;
    if(!this.created_at){
        this.created_at = currDate;
    }
    next();
});

module.exports = mongoose.model('User' , UserSchema);