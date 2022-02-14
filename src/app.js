const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.listen(port, () => console.log(`listening on ${port}`));
module.exports = app;
