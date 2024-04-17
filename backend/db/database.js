const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "disruptive";

const client = new MongoClient(url);

const connectToDatabase = client.db(dbName, { useUnifiedTopology: true });

async function createUser(data) {
  const result = await connectToDatabase.collection("users").insertOne(data);
  return result;
}

async function getUserByEmail(email) {
  const result = await connectToDatabase
    .collection("users")
    .findOne({ email});
  return result;
}
async function getUserByUsername(username) {
  const result = await connectToDatabase
    .collection("users")
    .findOne({ username});
  return result;
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUsername,
};
