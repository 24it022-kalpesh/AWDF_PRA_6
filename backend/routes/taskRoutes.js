// backend/routes/taskRoutes.js
// Practical Concept: Practical 7 - Authentication and Validation Middlewares

const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");
const validateTask = require("../middleware/validateTask");

const router = express.Router();

// GET all tasks / events
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const tasks = await Event.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
});

// GET one task by ID
router.get("/:id", authMiddleware, async (req, res, next) => {
  try {
    const task = await Event.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
});

// POST create new task
router.post("/", authMiddleware, validateTask, async (req, res, next) => {
  try {
    const task = await Event.create(req.body);
    res.status(201).json({ success: true, message: "Task created successfully", data: task });
  } catch (error) {
    next(error);
  }
});

// PUT update task
router.put("/:id", authMiddleware, validateTask, async (req, res, next) => {
  try {
    const task = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, message: "Task updated successfully", data: task });
  } catch (error) {
    next(error);
  }
});

// DELETE task
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const task = await Event.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
