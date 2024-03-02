import { getMemberByUserId } from "../models/members.models.js";
import { dbAddReaction, dbDeleteReaction } from "../models/reactions.models.js";

export async function addReaction(uId, postId, reactionType) {
  try {
    const memberId = await getMemberByUserId(uId);
    const reaction = await dbAddReaction(postId,memberId, reactionType);
    return reaction;
  } catch (error) {
    throw error;
  }
}

export async function deleteReaction(uId, postId) {
  try {
    const memberId = await getMemberByUserId(uId);
    const reaction = await dbDeleteReaction(postId, memberId);
    return reaction;
  } catch (error) {
    throw error;
  }
}
