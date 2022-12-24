const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  console.log("running user");
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const userEmail = await User.findOne({ email: req.body.email }).create(
      req.body
    );
    if (userEmail) {
      return res
        .status(409)
        .send({ message: "user with this email already exists" });
    }
    const userName = await User.findOne({ username: req.body.username }).create(
      req.body
    );
    if (userName) {
      return res
        .status(409)
        .send({ message: "user with this username already exists" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "user created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server Error" });
  }
});

module.exports = router;
