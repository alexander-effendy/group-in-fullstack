import { queryDatabase } from "../config/dbConfigs.js";

export async function dbCreateGroupRequest(groupId, memberId, description) {
    try {
      const query = `
        INSERT INTO group_requests (group_id, member_id, description)
        VALUES (?, ?, ?)`;
      
      const result = await queryDatabase(query, [groupId, memberId, description]);
  
      return { request_id: result.insertId, status: "pending", message: "Group request added successfully" };
    } catch (error) {
      console.error("Error adding group request:", error);
      throw error;
    }
  }
  
  export async function dbUpdateGroupRequestStatus(requestId, newStatus) {
    try {
      const query = "UPDATE group_requests SET status = ? WHERE request_id = ?";
      const result = await queryDatabase(query, [newStatus, requestId]);
  
      if (result.affectedRows === 0) {
        throw new Error("Group request not found");
      }
  
      return { success: true, message: "Group request status updated successfully" };
    } catch (error) {
      console.error("Error updating group request status:", error);
      throw error;
    }
  }
  
  export async function getGroupRequestById(requestId) {
    try {
      const query = "SELECT * FROM group_requests WHERE request_id = ?";
      const result = await queryDatabase(query, [requestId]);
  
      if (result.length === 0) {
        throw new Error("Group request not found");
      }
  
      return result[0];
    } catch (error) {
      console.error("Error fetching group request by ID:", error);
      throw error;
    }
  }
  