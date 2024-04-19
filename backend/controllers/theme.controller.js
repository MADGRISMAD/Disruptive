// controllers/theme.controller.js
const themeService = require('../services/theme.service');

// Controlador para crear una temática
const createTheme = async (req, res) => {
  try {
    const theme = await themeService.createTheme(req.body);
    res.status(201).json(theme);
  } catch (error) {
    res.status(500).send('Error creating theme: ' + error.message);
  }
};

module.exports = {
  createTheme
};
