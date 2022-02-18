const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");
const organisationRouter = require("./routes/Organisation");

app.use(express.json());
app.use(cors());

app.use("/api", organisationRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
