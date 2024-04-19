const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');
const upload = multer();

// POST - Crear usuario
router.post('/create', userController.createUser);
// POST - Iniciar sesion
router.post('/login', userController.LoginUser, (req,res) =>{
    try{
        const role = req.role;
        switch(role) {
            case 'admin':
                return res.status(200).send('admin');
            case 'creator':
                return res.status(200).send('creator');
            case 'stakeholder':
                return res.status(200).send('stakeholder');
        }
    }catch(error){
        return res.status(500).send('Error logging in: ' + error);
    }
});

// GET - Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// GET - Obtener un usuario por ID
router.get('/:id', userController.getUserById);

// PUT - Actualizar usuario
router.put('/:id', upload.none(), userController.updateUser);

// DELETE - Eliminar usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;
