const Image = require("../models/image.models");
const fs = require("fs");
const path = require("path");

const getImageById = async (req, res) => {

    const id = req.params.id

    const showImage = await Image.findById(id)

    try {

        return res.status(200).send({
            status: "success",
            showImage
        })
    } catch (error) {
        return res.send({ error: error.message })
    }

}

const showImage = (req, res) => {
    const file = req.params.file;

    const filePath = "./uploads/" + file;

    fs.stat(filePath, (error, exists) => {
        if (!exists || error) return res.status(404).send({ status: "error", message: "Image does not exist", error: error.message })
    })

    return res.sendFile(path.resolve(filePath));

}

const upload = async (req, res) => {

    if (!req.file) {
        return res.status(404).send({
            status: "error",
            message: "La petición no incluye la imagen"
        })
    }

    let image = req.file.originalname;

    const imageSplit = image.split("\.");
    const extension = imageSplit[1];

    if (extension != "png" && extension != "jpg" && extension != "jpeg" && extension != "gif") {

        const filePath = req.file.path;
        const fileDeleted = fs.unlinkSync(filePath);

        return res.status(400).send({
            status: 'error',
            message: "Extensión del fichero inválida"
        })
    }

    const newImage = new Image({ image: req.file.filename })

    const updatedImage = await newImage.save()

    try {

        return res.status(200).send({
            status: "success",
            image: updatedImage,
            file: req.file,

        })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Error en la subida de la imagen"
        })
    }

}


module.exports = { getImageById, upload, showImage }