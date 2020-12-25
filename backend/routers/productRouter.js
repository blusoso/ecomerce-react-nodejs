const express = require("express");
const data = require("../../data");
const Product = require("../models/productModel");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get("/seed", async (req, res) => {
    const createdProduct = await Product.insertMany(data.products);

    res.send({ createdProduct });
});

productRouter.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(400).send({ message: "Product Not Found!" });
    }
});

module.exports = productRouter;
