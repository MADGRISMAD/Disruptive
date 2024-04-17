const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const multer =require('multer');
const upload=multer();

//get

//post
router.post('/create',upload.none(), userController.createUser);
//delete

//put

module.exports = router;