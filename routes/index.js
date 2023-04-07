const express = require("express");
const router = express.Router();
const DataSchema = require("../model/Schema");

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

module.exports = router;
