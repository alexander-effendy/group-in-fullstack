import { queryDatabase } from "../config/dbConfigs.js";

export async function dbCreateGroupPost(postData) {
    try {
      const query = `
        INSERT INTO group_posts (post_date, post_time, title, description, group_id)
        VALUES (?, ?, ?, ?, ?)`;
      
      const { post_date, post_time, title, description, group_id } = postData;
      const result = await queryDatabase(query, [post_date, post_time, title, description, group_id]);
  
      return { group_post_id: result.insertId, message: "Group post added successfully" };
    } catch (error) {
      console.error("Error adding group post:", error);
      throw error;
    }
  }
  
  export async function dbDeleteGroupPost(postId) {
    try {
      const query = `
        DELETE FROM group_posts 
        WHERE group_post_id = ?`;
  
      const result = await queryDatabase(query, [postId]);
      if (result.affectedRows === 0) {
        throw new Error("Group post not found or unable to delete");
      }
  
      return { success: true, message: "Group post deleted successfully" };
    } catch (error) {
      console.error("Error deleting group post by ID:", error);
      throw error;
    }
  }
  
  export async function getGroupPost(postId) {
    try {
      const query = `
        SELECT * 
        FROM group_posts 
        WHERE group_post_id = ?`;
  
      const result = await queryDatabase(query, [postId]);
  
      if (result.length === 0) {
        throw new Error("Group post not found");
      }
  
      return result[0];
    } catch (error) {
      console.error("Error fetching group post by ID:", error);
      throw error;
    }
  }
  