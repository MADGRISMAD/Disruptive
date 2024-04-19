require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const corsOptions = require("./configurations/cors.configuration");
app.use(cors(corsOptions));
app.set("trust proxy");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Importar rutas
const userRouter = require('./router/user.router');
const themeRouter = require('./router/theme.router'); // Importar el enrutador de temas

// Usar los enrutadores
app.use("/users", userRouter);
app.use("/themes", themeRouter); // Agregar el enrutador de temas

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
