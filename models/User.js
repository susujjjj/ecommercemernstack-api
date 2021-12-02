const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // createdAt: Date.now() you can say but if we are using mongoDB, use Function like timestamps: true
);

module.exports = mongoose.model("User", UserSchema);
