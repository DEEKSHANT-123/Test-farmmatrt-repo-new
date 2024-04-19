const mongoose = require("mongoose");
const crypto = require("crypto");

const registeredStaffSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Method to hash the password before saving to the database
registeredStaffSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const hash = crypto.createHash("sha256").update(this.password).digest("hex");
    this.password = hash;
  }
  next();
});

// Method to compare passwords
registeredStaffSchema.methods.comparePassword = function (candidatePassword) {
  const hash = crypto.createHash("sha256").update(candidatePassword).digest("hex");
  return this.password === hash;
};

const Staff = mongoose.model("Staff", registeredStaffSchema);

module.exports = Staff;
