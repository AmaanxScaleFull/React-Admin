const User = require('../models/models');
const bcrypt = require('bcrypt')

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        console.log(savedUser)
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};


// Retrieve all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};

// Retrieve a specific user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    console.log(updates)
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    // console.log(userId);
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};


exports.checkCredentials = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Credentials are valid' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}




// const crudModel = require("../models/models")

// module.exports.getData = async (req, res) => {
//     const get_user = await crudModel.find()
//     res.send(get_user)
// }
// module.exports.saveData = (req, res) => {
//     const { id, name, age, email, password, access, phone, address } = req.body;

//     crudModel.create({ id, name, age, email, password, access, phone, address })
//         .then((data) => {
//             console.log("Saved Successfullt!!");
//             res.status(200);
//             res.send(data);
//         }).catch((err) => {
//             console.log(err);
//             res.send({ error: err, msg: "Error Found" })
//         })
// }
// module.exports.updateData = (req, res) => {
//     const { id } = req.params
//     const { name } = req.body
//     crudModel.findByIdAndUpdate(id, { name })
//         .then(() => {
//             res.send("Updated Successfullt!!");
//         }).catch((err) => {
//             console.log(err);
//             res.send({ error: err, msg: "Error Found" })
//         })
// }
// module.exports.deleteData = async (req, res) => {
//     const _id = req.params.id
//     crudModel.findByIdAndDelete(_id)
//         .then(() => {
//             res.send("Deleted Successfullt!!");
//             console.log("Deleted")
//         }).catch((err) => {
//             console.log(err);
//             res.send({ error: err, msg: "Error Found" })
//         })
// }

// module.exports.verifyData = async (req, res) => {

//     try {
//         const { email, password } = req.body

//         const data = await crudModel.findOne({ email, password })
//         if (data) {
//             res.json({ isValid: true, message: "Email is Valid" })
//         } else {
//             res.json({ isValid: false, message: "Email is Invalid" })
//         }

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Server Found" });
//     };
// }
