const mongoos = require("mongoose")
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoos.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true } // createdAt: Date.now() you can say but if we are using mongoDB, use Function like timestamps: true
);

module.exports = mongoose.model("User", UserSchema);
