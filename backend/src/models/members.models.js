import { queryDatabase } from "../config/dbConfigs.js";

export async function isMemberIdMatchingUid(memberId, firebaseUid) {
  try {
    const query = "SELECT member_id FROM member_firebase_mapping WHERE firebase_uid = ?";
    const result = await queryDatabase(query, firebaseUid);
    if (result.length === 0) {
      throw new Error("No mapping found for this Firebase UID");
    }
    // Compare the member_id from the database with the provided member_id
    return result[0].member_id === memberId;
  } catch (error) {
    console.error("Error fetching member-firebase mapping:", error);
    throw new Error(error.message);
  }
}
export async function getMemberById(id) {
  try {
    const query = "SELECT * FROM members WHERE id = ?";
    const result = await queryDatabase(query, id);
    if (result.length === 0) {
      throw new Error("Member Not Found");
    }
    return result[0];
  } catch (error) {
    console.error("Error fetching member:", error);
    throw new Error(error.message);
  }
}

export async function dbUpdateMember(memberId, updatedData) {
  try {
    const query = "UPDATE members SET ? WHERE id = ?";
    const result = await queryDatabase(query, [updatedData, memberId]);
    return result;
  } catch (error) {
    console.error("Error updating member:", error);
    throw new Error(error.message);
  }
}

export async function dbDeleteMember(memberId) {
  try {
    const query = "DELETE FROM members WHERE id = ?";
    const result = await queryDatabase(query, memberId);
    return result;
  } catch (error) {
    console.error("Error deleting member:", error);
    throw new Error(error.message);
  }
}
