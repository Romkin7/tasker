const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const newUser = await User.findById(user._id).select('-password');
        const token = await user.generateAuthToken();
        res.status(201).send({ user: newUser, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router
    .route('/users/:id')
    .put(auth, async (req, res) => {
        try {
            const user = await User.findById(req.params.id).select('-password');
            user.email = req.body.email;
            user.name = req.body.name;
            user.age = req.body.age;
            const updatedUser = await user.save();
            return res.status(200).json({
                message: `${updatedUser.name} information was successfully updated!`,
                user: updatedUser,
            });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    })
    .delete(auth, async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (user) {
                return res
                    .status(200)
                    .json({ message: `Succesfully deleted ${user.name}!` });
            } else {
                return res.status(404).json({ message: 'User not found!' });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });

module.exports = router;
