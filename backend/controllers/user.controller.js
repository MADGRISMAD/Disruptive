const userSchema = require('../models/user.model');
const userService = require('../services/user.service');

const createUser = async(req, res) => {
    try {
        let {error,value} = userSchema.validate(req.body);
        console.log(value);
        if(error) {
            return res.status(400).send(error.details);
        }
        if(await userService.getUserByEmail(value.email)) {
            return res.status(400).send('Email already exists');
        }
        if(await userService.getUserByUsername(value.username)) {
            return res.status(400).send('Username already exists');
        }
        const user = await userService.createUser(value);
        
        return res.status(201).send(user);
        
        
    }
    catch(error)
    {
        return res.status(500).send('Error creating user: ' + error);
    }
}

module.exports = {
    createUser
};

