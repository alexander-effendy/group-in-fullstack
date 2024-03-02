import { queryDatabase } from "../config/dbConfigs.js";

export async function dbGetAllCourses() {
  return await queryDatabase("SELECT * FROM courses");
}

export async function dbGetGroupsByCourseId(courseId) {
  return await queryDatabase("SELECT * FROM groups WHERE course_id = ?", [
    courseId,
  ]);
}

export async function dbGetCourseById(courseId) {
  try {
    const course = await queryDatabase("SELECT * FROM courses WHERE course_id = ?", [
      courseId,
    ]);

    console.log(course, courseId)
    
    if (course.length === 0) {
      throw new Error("Course not found");
    }

    return course[0];
  } catch (error) {
    throw error;
  }
}
