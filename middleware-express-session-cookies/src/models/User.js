import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  loginAt: Date,
  logoutAt: Date,
  lastActiveAt: Date
});

// ✅ Middleware 1
userSchema.pre("save", async function () {
  this.lastActiveAt = new Date();
});

// ✅ Middleware 2
userSchema.pre("findOneAndUpdate", async function () {
  this.set({ lastActiveAt: new Date() });
});

const User = mongoose.model("User", userSchema);

export default User;