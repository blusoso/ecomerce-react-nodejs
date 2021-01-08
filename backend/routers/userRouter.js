const express = require("express");
const User = require("../models/userModel");
const data = require("../../data");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils");

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
    const createdUsers = await User.insertMany(data.users);

    res.send({ createdUsers });
});

userRouter.get("/", async (req, res) => {
    const users = await User.find();

    res.send(users);
});

userRouter.post("/signin", async (req, res) => {
    const user = await User.findOne({ email: req.body.email }); //find only one record

    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    } else {
        res.status(401).send({ message: "Invalid email or password" });
    }
});

userRouter.post("/signup", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    const createdUser = await user.save().catch((err) => res.status(401).send({ message: `${err}` }));

    if (createdUser) {
        res.status(200).send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(user),
        });
    }
});

module.exports = userRouter;
