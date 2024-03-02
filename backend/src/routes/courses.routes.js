import express from "express";
import { getAllCourses, getGroupsByCourseId } from "../services/courses.services.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.status(200).send(courses);
  } catch (error) {
    res.status(404).send({ message: "Courses not found", error: error.message });
  }
})

router.get("/:id", async (req, res) => {
  try {
    console.log('init')
    const member = await dbGetGroupsByCourseId(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

export default router;
