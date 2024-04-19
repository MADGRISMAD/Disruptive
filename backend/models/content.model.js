const Joi = require('joi');
const contentSchema = Joi.object({
    title: Joi.string().required(),
    type: Joi.string().valid('image', 'video', 'text').required(),
    url: Joi.string().required(),
    createdAt: Joi.date().timestamp().required(),
    author: Joi.string().required(),
    theme: Joi.string().required()
});
module.exports = contentSchema;