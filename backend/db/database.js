const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "disruptive";

const client = new MongoClient(url);

async function connectToDatabase() {
    await client.connect();
    return client.db(dbName);
}

async function createUser(data) {
    const db = await connectToDatabase();
    const result = await db.collection("users").insertOne(data);
    return result;
}

async function getUserByEmail(email) {
    const db = await connectToDatabase();
    const result = await db.collection("users").findOne({ email });
    return result;
}

async function getUserByUsername(username) {
    const db = await connectToDatabase();
    const result = await db.collection("users").findOne({ username });
    return result;
}

async function getAllUsers() {
    const db = await connectToDatabase();
    const users = await db.collection("users").find().toArray();
    return users;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserByUsername,
    getAllUsers
};
