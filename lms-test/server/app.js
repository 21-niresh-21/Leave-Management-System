const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");
const organisationRouter = require("./routes/Organisation");
const countryRouter  = require('./routes/country')
const stateRouter = require('./routes/state')

app.use(express.json());
app.use(cors());

app.use("/api/signup", organisationRouter);
app.use("/api/country", countryRouter);
app.use("/api/state", stateRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
