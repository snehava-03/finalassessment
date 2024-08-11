const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

require("./connection"); // Ensure your MongoDB connection is established
const BlogModel = require('./model'); // Import the BlogModel correctly

// POST API to add employee data
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while adding the employee" });
  }
});

// GET API to retrieve employee data
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while fetching the data" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
