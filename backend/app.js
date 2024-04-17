const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users",require('./router/user.router'));

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});