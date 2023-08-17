const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/routes")

const cors = require("cors");

const PORT = process.env.PORT || 2000
const app = express()

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));


app.use(routes)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
