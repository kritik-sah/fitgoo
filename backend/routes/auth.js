const router = require("express").Router();
const { User, validate } = require("../models/user");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const userEmail = await User.findOne({ email: req.body.email }).create(
      req.body
    );
    const userName = await User.findOne({ username: req.body.username }).create(
      req.body
    );
    if (!userEmail && !userName) {
      return res.status(401).send({ message: "Invalid user or password" });
    }
    const user = userEmail ? userEmail : userName;
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid user or password" });
    }
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server Error" });
  }
});

module.exports = router;
