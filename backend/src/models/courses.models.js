import { queryDatabase } from "../config/dbConfigs.js";

export async function dbGetAllCourses() {
  try {
    const query = "SELECT * FROM courses";
    const results = await queryDatabase(query);
    return results;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
}

export async function dbGetGroupsByCourseId(courseId) {
  try {
    const query = "SELECT * FROM groups WHERE course_id = ?";
    console.log('GYATTTTTTTT', courseId);
    const result = await queryDatabase(query, [courseId]);
        if (result.affectedRows === 0) {
          throw new Error("Course not found");
        }

    if (result.length === 0) {
      throw new Error("Group post not found");
    }

    return result[0];
  } catch (error) {
    console.error("Error fetching group post by ID:", error);
    throw error;
  }
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
