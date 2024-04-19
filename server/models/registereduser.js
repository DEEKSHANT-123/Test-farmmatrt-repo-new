const mongoose = require("mongoose");
const crypto = require("crypto");

const registeredUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


registeredUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await crypto
      .createHash("sha256")
      .update(this.password)
      .digest("hex");
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
registeredUserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const hash = await crypto
      .createHash("sha256")
      .update(candidatePassword)
      .digest("hex");
    return this.password === hash;
  } catch (error) {
    return false;
  }
};


const RegisteredUser = mongoose.model("RegisteredUser", registeredUserSchema);

module.exports = RegisteredUser;
