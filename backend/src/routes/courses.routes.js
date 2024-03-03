import express from "express";
import { getAllCourses, getCourseById } from "../services/courses.services.js";
const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const courses = await getAllCourses();
//     res.status(200).send(courses);
//   } catch (error) {
//     res.status(404).send({ message: "Courses not found", error: error.message });
//   }
// })

router.get("/:id", async (req, res) => {
  try {
    console.log('init')
    const course = await getCourseById(req.params.id);
    res.status(200).send(course);
  } catch (error) {
    res.status(404).send({error: error.message });
  }
});

export default router;