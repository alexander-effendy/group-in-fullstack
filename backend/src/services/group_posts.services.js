import { dbCreateGroupPost, dbDeleteGroupPost, getGroupPost } from "../models/group_posts.models.js";

export async function addGroupPost(postData) {
  try {
    const result = await dbCreateGroupPost(postData);
    return { message: "Group post added successfully", group_post_id: result.group_post_id };
  } catch (error) {
    throw new Error("Failed to add group post");
  }
}

export async function removeGroupPost(postId) {
  try {
    const deletedGroupPost = await dbDeleteGroupPost(postId);
    return { message: 'Group post deleted successfully', groupPost: deletedGroupPost };
  } catch (error) {
    throw new Error("Failed to delete group post");
  }
}

export async function fetchGroupPost(postId) {
  try {
    const groupPost = await getGroupPost(postId);
    return { groupPost };
  } catch (error) {
    throw new Error("Failed to fetch group post");
  }
}
