const router = require('express').Router();

const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

router.post('/tasks', (req, res, next) => {
  const { title, description, project } = req.body;

  Task.create({ title, description, project })
    .then((newTask) => {
      return Project.findByIdAndUpdate(project, { $push: { tasks: newTask._id } }, { new: true });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
