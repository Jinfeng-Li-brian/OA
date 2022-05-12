const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => {
    try {
        const [allUsers] = await User.fetchAll();
        res.status(200).json(allUsers);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.get(req.params.id);
        res.status(200).json(user[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body.first_name, req.body.last_name, "email", "phone", "img");
        console.log(user)
        res.status(200).json(user[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postImage = async (req, res, next) => {
    // placeholder
};

exports.putUser = async (req, res, next) => {
    try {
        const user = await User.update(req.body.id, req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.img);
        console.log(user)
        res.status(200).json(user[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.delete(req.params.id);
        console.log(user)
        res.status(200).json(user[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};