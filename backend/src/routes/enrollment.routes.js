import express from "express";
import { dbEnrollMemberInCourse, getEnrollmentById, dbUnenrollMemberFromCourse } from "../models/enrollment.models.js";
import { getMemberByUserId } from "../models/members.models.js";

const router = express.Router();

router.post("/enroll", async (req, res) => {
  try {
    console.log("wassup motherfucker--------------------------------------------------------------")
    const { course_id } = req.body;
    const memberId = await getMemberByUserId(req.user.uid);
    console.log(course_id, memberId, 'yetttttttttttttttttt');
    const result = await dbEnrollMemberInCourse(course_id, memberId);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/:enrollmentId", async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const enrollment = await getEnrollmentById(enrollmentId);
    res.status(200).json({ enrollment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete("/unenroll", async (req, res) => {
  try {
    const { course_id } = req.body;
    const member_id = await getMemberByUserId(req.user.uid);
    const result = await dbUnenrollMemberFromCourse(course_id, member_id);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
