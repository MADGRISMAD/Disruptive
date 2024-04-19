const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');
const upload = multer();

// POST - Crear usuario
router.post('/create', upload.none(), userController.createUser);

// GET - Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// GET - Obtener un usuario por ID
router.get('/:id', userController.getUserById);

// PUT - Actualizar usuario
router.put('/:id', upload.none(), userController.updateUser);

// DELETE - Eliminar usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;
