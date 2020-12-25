const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        category: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        brand: { type: String, require: true },
        description: { type: String, require: true },
        rating: { type: Number, require: true },
        numReviews: { type: Number, default: 0, require: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
