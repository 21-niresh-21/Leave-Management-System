const express = require("express");
const app = express();
const cors = require("cors");


const login  = require('./routes/login')
const db = require("./models");

app.use(express.json());
app.use(cors());

app.use('api/login',login)

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
