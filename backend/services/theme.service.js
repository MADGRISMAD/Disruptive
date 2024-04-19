const database = require('../db/database');

async function createTheme(themeData) {
  try {
    // Validar los datos utilizando el esquema de Joi
    const { error, value } = themeSchema.validate(themeData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    // Crear la temática en la base de datos
    return await Theme.create(value);
  } catch (error) {
    throw new Error('Error creating theme: ' + error.message);
  }
}

module.exports = {
  createTheme
};
