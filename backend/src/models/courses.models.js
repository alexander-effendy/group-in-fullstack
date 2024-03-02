import { queryDatabase } from "../config/dbConfigs.js";

export async function dbGetAllCourses() {
  return await queryDatabase("SELECT * FROM courses");
}

export async function dbGetGroupsByCourseId(courseId) {
  return await queryDatabase("SELECT * FROM groups WHERE course_id = ?", [
    courseId,
  ]);
}
