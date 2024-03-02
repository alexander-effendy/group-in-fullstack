import { queryDatabase } from "../config/dbConfigs";

export async function getReviewsByMemberId(memberId) {
  try {
    const query = `
      SELECT reviews.*, members.name as reviewer_name, members.member_bio as reviewer_bio
      FROM reviews
      INNER JOIN members ON reviews.reviewer_id = members.member_id
      WHERE reviews.reviewee_id = ?
    `;
    const result = await queryDatabase(query, [memberId]);
    return result;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error(error.message);
  }
}