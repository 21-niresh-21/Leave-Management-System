const express = require("express");
const router = express.Router();
const { country } = require("../models");

router.get("/", async (req, res) => {
  const countries = await country.findAll();
  res.json(countries);
});

router.post("/", (req, res) => {
  const newCountry = req.body;
  country
    .create(newCountry)
    .then(() => {
      res.json("admin added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
