
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    registrarId: {
        type: Number,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    access: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

