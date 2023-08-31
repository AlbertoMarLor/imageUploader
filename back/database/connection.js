const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/imageUploader");

        console.log("Connected succesfully to db: imageUploader");
    } catch (error) {
        console.log(error);
        throw new Error("Connection to db can not be done")
    }
}

module.exports = connection;