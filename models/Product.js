const mongoos = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoos.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    categories: { type: Array, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true } // createdAt: Date.now() you can say but if we are using mongoDB, use Function like timestamps: true
);

module.exports = mongoose.model("Product", ProductSchema);
 