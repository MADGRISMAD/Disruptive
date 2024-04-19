// utils/validation.js
const Joi = require('joi');

// Esquema de Joi para validar el modelo de tema
const themeSchema = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.object({
    images: Joi.boolean().default(false),
    videos: Joi.boolean().default(false),
    texts: Joi.boolean().default(false)
  }).required()
});

module.exports = {
  themeSchema
};
