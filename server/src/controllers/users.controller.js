const userCtrl = {};

const User = require("../models/User");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find(); //arreglo con todas las notas
  res.json(users);
};

userCtrl.createUsers = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({
    username,
  });
  await newUser.save();
  res.send("users saved");
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("users deleted");
};

module.exports = userCtrl;
