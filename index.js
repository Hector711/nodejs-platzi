const express = require('express');
const routerApi = require('./routes');

const morgan = require("morgan"); // Middleware de logging

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta es la homepage!');
})

app.use(morgan("dev")); // Formato de logging



// app.use("/api", router);
routerApi(app);




app.listen(port, () => {
   console.log(`Servidor corriendo en puerto ${port}`);
});
