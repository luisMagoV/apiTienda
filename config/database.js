const mongoose = require ('mongoose');
const chalk = require('chalk');
const dbURL = require('./propiedades').DB;

// custom console

const conneted = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () =>{
    mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() =>console.log(conneted('Mongo connected! on ', dbURL))).catch(err => console(error (`Connection has  ocurred error ${err}`)));


    process.on('SIGINT', () => {
        mongoose.connection.close(() =>{
            console.log('Mongoose is diconnect');
            process.exit(0);
        });
    });
}