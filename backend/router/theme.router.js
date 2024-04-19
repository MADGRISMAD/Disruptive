// routes/theme.routes.js
const express = require('express');
const router = express.Router();
const themeController = require('../controllers/theme.controller');

// Ruta para crear una temática
router.post('/', themeController.createTheme);

module.exports = router;
