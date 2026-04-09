import User from "../model/user.model.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: "Yash",
      email: "yash@gmail.com",
      password: "123456",
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};