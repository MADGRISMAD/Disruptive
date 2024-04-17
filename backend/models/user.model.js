const Joi = require('joi');

const userModel = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
    type: Joi.string().valid('creator', 'admin','stakeholder').default('stakeholder')
})

module.exports = userModel;