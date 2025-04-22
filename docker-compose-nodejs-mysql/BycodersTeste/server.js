require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
   origin: '*'
};

app.use(cors(corsOptions));

// application/json
app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// basic route
app.get("/", (req, res) => {
  res.json({ message: "Teste By_coders rodando." });
});

require("./app/routes/financial.routes")(app);


// set listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server rodando porta ${PORT}.`);
});
