const mongoose = require("mongoose");

const CRUDSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    }
})

module.export = mongoose.model("Crud", CRUDSchema)