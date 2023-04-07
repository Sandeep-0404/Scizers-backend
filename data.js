require("dotenv").config();
const connectDB = require("./DB/connect");
const Schema = require("./model/Schema");

const getData = async () => {
  const Data = await fetch("https://api.wazirx.com/api/v2/tickers");
  const response = await Data.json();
  return response;
};

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    const response = await getData();

    for (let i = 0; i < 10; i++) {
      const data = await new Schema(Object.values(response)[i]);
      data.save();
    }

    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

module.exports = start;
