const userSchema = require('../models/user.model');
const userService = require('../services/user.service');

// Crear usuario
const createUser = async (req, res) => {
    try {
        let { error, value } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details);
        }
        if (await userService.getUserByEmail(value.email)) {
            return res.status(400).send('Email already exists');
        }
        if (await userService.getUserByUsername(value.username)) {
            return res.status(400).send('Username already exists');
        }
        const user = await userService.createUser(value);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send('Error creating user: ' + error);
    }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send('Error getting users: ' + error);
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send('Error getting user: ' + error);
    }
};

// Actualizar usuario
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.updateUser(userId, userData);
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send('Error updating user: ' + error);
    }
};

// Eliminar usuario
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser(userId);
        return res.status(200).send('User deleted successfully');
    } catch (error) {
        return res.status(500).send('Error deleting user: ' + error);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
