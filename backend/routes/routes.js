const express = require('express');
const userController = require('../controllers/controllers');

const router = express.Router();

router.post('/post', userController.createUser);

router.get('/get', userController.getAllUsers);

router.get('/getbyid/:id', userController.getUserById);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);


router.post('/credentials', userController.checkCredentials);

module.exports = router;








// const { Router } = require("express");

// const {
//     getData,
//     saveData,
//     updateData,
//     deleteData,
//     verifyData,
// } = require("../controllers/controllers")

// const router = Router();

// router.get("/get", getData);
// router.post("/save", saveData);
// router.put("/update/:id", updateData);
// router.post("/delete/:id", deleteData);
// router.post("/verify", verifyData);


// module.exports = router;