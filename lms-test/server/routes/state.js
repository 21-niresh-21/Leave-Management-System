const express = require("express");
const router = express.Router();
const { country, state, Sequelize } = require("../models");

router.get("/", async (req, res) => {
  const states = await state.findAll({
    include: [
      {
        model: country,
        attributes: [],
      },
    ],
    attributes: [
      "id",
      "stateName",
      [Sequelize.col("country.countryName"), "countryName"],
    ],
  });
  res.json(states);
});

router.post("/", (req, res) => {
  const newState = req.body;
  state
    .create(newState)
    .then(() => {
      res.json("state added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
