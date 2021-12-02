const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true,  },
    img: { type: String, required: true },
    categories: { type: Array},
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true } // createdAt: Date.now() you can say but if we are using mongoDB, use Function like timestamps: true
);

module.exports = mongoose.model ("Product", ProductSchema);
 