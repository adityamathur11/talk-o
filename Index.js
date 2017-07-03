/**
 * Created by Aditya on 03-Jul-17.
 */
const express = require('express')
    ,mongoose = require('mongoose')
    ,config = require('config');
mongoose.Promise = global.Promise;
let apiRouter = express.Router();
let userRouter = require('./API/route/UserRoute');
apiRouter.use('/user' , userRouter);
const app = express();
app.use('/api' , apiRouter);
let PORT = process.env.port || 3000;
connectDB()
    .on('error' , function () {
        console.log(`error while connecting DB`);
    })
    .on('disconnect',connectDB)
    .once('open' , function () {
        app.listen(PORT , function () {
            console.log(`Server is running on port : ${PORT}`);
        });
    });
function connectDB() {
    let options = {
        server : {
            socketOptions : {
                keepAlive: 1
            }
        }
    };
    return mongoose.connect(config.db , options).connection;
}