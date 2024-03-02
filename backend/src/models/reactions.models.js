import { queryDatabase } from "../config/dbConfigs.js";

export async function dbAddReaction(reviewId, memberId, reactionType) {
  try {
    const query = `
      INSERT INTO review_reactions (review_id, member_id, reaction_type) 
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE reaction_type = VALUES(reaction_type)
    `;
    const values = [reviewId, memberId, reactionType];
    const result = await queryDatabase(query, values);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function dbDeleteReaction(reviewId, memberId) {
  try {
    const query = `DELETE FROM review_reactions WHERE review_id = ? AND member_id = ?`;
    const result = await queryDatabase(query, [reviewId, memberId]);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}