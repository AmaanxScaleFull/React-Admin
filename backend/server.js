const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const URI = 'mongodb+srv://Admin:Admin123@cluster0.wfzjirg.mongodb.net/CRUD_DB?'

const app = express();
const PORT = process.env.PORT || 2000;


mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
