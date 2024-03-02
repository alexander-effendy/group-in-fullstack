import {
  dbGetAllCourses,
  dbGetGroupsByCourseId,
} from "../models/courses.models.js";

export async function getGroupsByCourseId() {
  try {
    const courses = await dbGetAllCourses();

    const coursesWithGroups = await Promise.all(courses.map(async (course) => {
      const groups = await dbGetGroupsByCourseId(course.course_id);
      return { ...course, groups };
    }));

    return coursesWithGroups;
  } catch (error) {
    throw error;
  }
}

export async function getAllCourses() {
  return await dbGetAllCourses();
}
