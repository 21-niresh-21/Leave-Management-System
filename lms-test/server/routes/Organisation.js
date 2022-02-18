const { application } = require("express");
const express = require("express");
const router = express.Router();
const { Organisation } = require("../models");
const bcrypt = require("bcrypt");

router.get("/signup", async (req, res) => {
  const organisation = await Organisation.findAll();
  res.json(organisation);
});

router.post("/signup",  (req, res) => {
  const organisation = req.body;
  const password = organisation.password;
  bcrypt.hash(password, 10).then((hash) => {
    organisation.password = hash;
     Organisation.create(organisation)
      .then(() => {
        res.json("admin added");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
  console.log(organisation);
});

module.exports = router;
