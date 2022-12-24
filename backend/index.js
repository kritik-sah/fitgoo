require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//Connections
connection();

//middleware
app.use(express.json);
const url = new URL("http://127.0.0.1:8080");
app.use(cors());
const port = process.env.PORT || 8080;

//routes
app.use("/api/user", userRoutes); //user signup
app.use("/api/auth", authRoutes); //user login

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
