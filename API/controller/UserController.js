/**
 * Created by Aditya on 03-Jul-17.
 */
let UserModel = require('../model/User');
module.exports = {
    createNewUser : (req , res)=>{
        let newUser = new UserModel({
            name : "aditya",
            phoneNumber : "123" + Math.random(),
            email : "abc" + Math.random(),
            password : "abc"
        });

        newUser.save(function (err) {
            if(err) throw err;

            newUser.password = "idunknow";
            newUser.save(function (err) {
                if(err) throw err;
                res.json(newUser);
            })
        });


    }
};
