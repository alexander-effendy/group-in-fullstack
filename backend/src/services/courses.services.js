import {
  dbGetAllCourses,
  dbGetCourseById,
  dbGetGroupsByCourseId,
} from "../models/courses.models.js";

export async function getCourseById(courseId) {
  try {
    const course = await dbGetCourseById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
}

export async function getAllCourses() {
  try {
    const courses = await dbGetAllCourses();
    return courses;
  } catch (error) {
    throw error;
  }
}
