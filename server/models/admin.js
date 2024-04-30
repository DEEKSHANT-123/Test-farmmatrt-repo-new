const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt= require("jsonwebtoken");

const registeredAdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Method to hash the password before saving to the database
registeredAdminSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const hash = crypto.createHash("sha256").update(this.password).digest("hex");
    this.password = hash;
  }
  next();
});

// Method to compare passwords
registeredAdminSchema.methods.comparePassword = function (candidatePassword) {
  const hash = crypto.createHash("sha256").update(candidatePassword).digest("hex");
  return this.password === hash;
};

registeredAdminSchema.methods.generateToken =  async function () {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
    
  } catch (error) {
    console.error(error);
    
  }
};

const Admin = mongoose.model("Admin", registeredAdminSchema);

module.exports = Admin;
