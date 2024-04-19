const express = require("express");
const router = express.Router();
const RegisteredUser = require("./models/registereduser");
const Admin = require("./models/admin");
const Staff = require('./models/staff');

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await RegisteredUser.findOne({ email });

    if (!user) {
      return res.status(401).send("User not found or invalid credentials");
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      // Login successful
      res.sendStatus(200);
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).send("User login failed. Please try again.");
  }
});
// Admin login endpoint
router.post("/admin/login", async (req, res) => {
try {
const { email, password } = req.body;
const admin = await Admin.findOne({ email, password });
console.log(admin);

if (!admin) {
return res.status(401).send("Invalid email or password");
}

// Authentication successful
res.sendStatus(200); // OK
} catch (error) {
console.error("Admin login error:", error);
res.status(500).send("Admin login failed. Please try again.");
}
});

router.post("/staff/login", async (req, res) => {
try {
const { email, password } = req.body;
const staff = await Staff.findOne({ email, password });
console.log(staff);
if (!staff) {
return res.status(401).send("Invalid email or password");
}
// Authentication successful
res.sendStatus(200); // OK
} catch (error) {
console.error("Staff login error:", error);
res.status(500).send("Staff login failed. Please try again.");
}
});

// User signup endpoint
router.post("/signup", async (req, res) => {
try {
const { username, email, password } = req.body;
const newUser = new RegisteredUser({ username, email, password });
await newUser.save();
res.sendStatus(201); // Created
} catch (error) {
console.error("Signup error:", error);
res.status(500).send("Signup failed. Please try again.");
}
});

// Get all registered users
router.get("/registered-users", async (req, res) => {
    try {
      const users = await RegisteredUser.find({}, { password: 0 }); // Exclude password field
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching registered users:", error);
      res.status(500).send("Failed to fetch registered users.");
    }
  });

  // Update a registered user by ID
router.put("/registered-users/:id", async (req, res) => {
    const { username, email } = req.body;
    try {
      const updatedUser = await RegisteredUser.findByIdAndUpdate(
        req.params.id,
        { username, email },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send("Failed to update user.");
    }
  });
  
  // Delete a registered user by ID
  router.delete("/registered-users/:id", async (req, res) => {
    try {
      await RegisteredUser.findByIdAndDelete(req.params.id);
      res.sendStatus(204); // No content
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).send("Failed to delete user.");
    }
  });

module.exports = router;