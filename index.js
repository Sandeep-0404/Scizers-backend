require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const contact_route = require("./routes/index");
const connectDB = require("./db/connect");
app.use(express.json());
let cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hey this is contact saving application created by Sandeep Ghosh");
});

app.use("/", contact_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("server is set on port ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
