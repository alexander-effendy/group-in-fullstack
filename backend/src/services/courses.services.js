import {
  dbGetAllCourses,
  dbGetCourseById,
  dbGetGroupsByCourseId,
} from "../models/courses.models.js";

export async function getCourseById(courseId) {
  try {
    const course = await dbGetCourseById(courseId);

    course.groups = await dbGetGroupsByCourseId(courseId);

    return course;
  } catch (error) {
    throw error;
  }
}

export async function getAllCourses() {
  try {
    const courses = await dbGetAllCourses();

    const coursesWithGroups = await Promise.all(
      courses.map(async (course) => {
        const groups = await dbGetGroupsByCourseId(course.course_id);
        return { ...course, groups };
      })
    );

    return coursesWithGroups;
  } catch (error) {
    throw error;
  }
}
