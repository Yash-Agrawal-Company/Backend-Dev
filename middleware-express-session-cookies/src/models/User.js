import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  loginAt: Date,
  logoutAt: Date,
  lastActiveAt: Date,

  isDeleted: {
  type: Boolean,
  default: false
}
});

// ✅ Middleware 1
userSchema.pre("save", async function () {
  this.lastActiveAt = new Date();
});

// ✅ Middleware 2
userSchema.pre("findOneAndUpdate", async function () {
  this.set({ lastActiveAt: new Date() });
});

// 🔥 Automatically exclude deleted users in find queries
userSchema.pre(/^find/, function () {
  this.where({ isDeleted: false });
});

const User = mongoose.model("User", userSchema);

export default User;


///69de23cac3c7219bf5814f17