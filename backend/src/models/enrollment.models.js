import { queryDatabase } from "../config/dbConfigs.js";

export async function dbEnrollMemberInCourse(courseId, memberId) {
    try {
      const query = `
        INSERT INTO enrollment (course_id, member_id)
        VALUES (?, ?)`;
  
      const result = await queryDatabase(query, [courseId, memberId]);
  
      return { enrollment_id: result.insertId, message: "Member enrolled in course successfully" };
    } catch (error) {
      console.error("Error enrolling member in course:", error);
      throw error;
    }
  }
  
  export async function getEnrollmentById(enrollmentId) {
    try {
      const query = "SELECT * FROM enrollment WHERE enrollment_id = ?";
      const result = await queryDatabase(query, [enrollmentId]);
  
      if (result.length === 0) {
        throw new Error("Enrollment not found");
      }
  
      return result[0];
    } catch (error) {
      console.error("Error fetching enrollment by ID:", error);
      throw error;
    }
  }
  