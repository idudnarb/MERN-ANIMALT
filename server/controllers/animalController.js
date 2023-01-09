const Animal = require("../models/Animal");

exports.createAnimal = async (req, res) => {
  try {
    const newAnimal = await Animal.create(req.body);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    error;
  }
};
