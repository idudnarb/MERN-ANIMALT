const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const animalSchema = new Schema({
  // _id: { type: String },
  img: String,
  name: { type: String, required: [true, "Enter AnimalName"] },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
