const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = joi.object({
    username: joi.string().required().label("User Name"),
    email: joi.string().email().required().label("User Email"),
    password: passwordComplexity().required().label("password"),
    firstName: joi.string().label("First Name"),
    lastName: joi.string().label("Last Name"),
    phoneNumber: joi.string().label("Phone Number"),
  });
  return schema.validate(data);
};

module.exports = {
  User,
  validate,
};
