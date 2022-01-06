const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const SortQuery = require('../utils/sortQuery');
const Pagination = require('../utils/pagination');
const router = new express.Router();

router.get('/tasks', auth, async (req, res) => {
    try {
        const sortQuery = new SortQuery(req.query);
        const tasksCount = await Task.countDocuments({ owner: req.user._id });
        const pagination = new Pagination(req.query, tasksCount);
        const tasks = await Task.find({ owner: req.user._id })
            .sort(sortQuery)
            .skip((pagination.currentPage - 1) * pagination.perPage)
            .limit(pagination.perPage);
        if (tasks) {
            return res.status(200).json({ tasks, pagination });
        } else {
            return res.status(404).json({ message: 'Tasks not found!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findOne({ _id, owner: req.user._id });

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id,
    });

    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
