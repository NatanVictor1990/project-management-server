// routes/project.routes.js

const router = require("express").Router();

// const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");

//  POST /api/projects  -  Creates a new project
router.get("/", (req, res, next) => {
  res.send("Hello from projects route!");
  Project.find()
    .populate("tasks")
    .then((allProjects) => res.json(allProjects))
    .catch((err) => res.json(err));
});

router.get("/:projectId", (req,res)=> {
  
})

module.exports = router;
