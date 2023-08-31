const express = require('express');
const router = express.Router();
const multer = require("multer");
const ImageController = require('../controllers/image.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + Date.now() + "-" + file.originalname);
    }
})

const uploads = multer({ storage });

router.get("/get/:id", ImageController.getImageById);
router.get("/show/:file", ImageController.showImage);

router.post("/upload", uploads.single("file0"), ImageController.upload);


module.exports = router;