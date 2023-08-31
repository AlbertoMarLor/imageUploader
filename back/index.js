
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("API NODE para image uploader arrancada");

connection();

const app = express();
const port = 3900;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ImageRoutes = require("./routes/image.routes")

app.use("/api/image", ImageRoutes);

app.listen(port, () => {
    console.log("Node server running on port ", port);
})