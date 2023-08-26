const { Schema, model } = require("mongoose");

const ImageSchema = Schema({
    image: String,
});

module.exports = model("Image", ImageSchema, "images");