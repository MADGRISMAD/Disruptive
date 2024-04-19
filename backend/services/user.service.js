const database = require('../db/database');

async function createUser(userData) {
    return await database.createUser(userData);
}

async function getUserByEmail(email) {
    return await database.getUserByEmail(email);
}

async function getUserByUsername(username) {
    return await database.getUserByUsername(username);
}

async function getAllUsers() {
    return await database.getAllUsers();
}
async function LoginUser(data){
    return await database.LoginUser(data);
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserByUsername,
    getAllUsers,
    LoginUser
};
