require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const { 
  zodErrorHandler
} = require("./src/utils/error")

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api", router);

app.use(zodErrorHandler);


app.listen(PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
