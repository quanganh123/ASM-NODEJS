const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/asm-nodejs');
        console.log("ss");
    } catch (error) {
        console.log("ff");
    }
};

module.exports = { connect };