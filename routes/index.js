const express = require("express");
const router = express.Router();
const DataSchema = require("../model/Schema");
const TelegramSchema = require("../model/Telegram");

router.get("/", (req, res) => {
  res.send("hii this link is working");
});

router.get("/api", async (req, res) => {
  const sort = { name: 1 };
  const getData = await DataSchema.find({}).sort(sort);
  res.send(getData);
});

router.get("/api/:key", async (req, res) => {
  const sort = { name: 1 };
  const getData = await DataSchema.find({
    $or: [
      { name: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
    ],
  }).sort(sort);
  res.send(getData);
});

router.post("/api", async (req, res) => {
  const addRecord = await new DataSchema(req.body);
  addRecord.save();
  res.status(201).send(addRecord);
});

router.delete("/api/:id", async (req, res) => {
  const id = req.params.id;
  const deleteStudents = await DataSchema.findByIdAndDelete(id);
  res.send(deleteStudents);
});

router.get("/shop", async (req, res) => {
  const getData = await TelegramSchema.find({});
  res.send(getData);
});

router.post("/shop", async (req, res) => {
  const addRecord = await new TelegramSchema(req.body);
  addRecord.save();
  res.status(201).send(addRecord);
});

router.patch("/shop/:name", async (req, res) => {
  const name = req.params;

  try {
    const getData = await TelegramSchema.findOneAndUpdate(name, req.body, {
      new: true,
    });

    res.send(getData);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
