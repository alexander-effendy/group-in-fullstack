import { queryDatabase } from "../config/dbConfigs.js";

export async function isMemberIdMatchingUid(memberId, firebaseUid) {
  try {
    console.log("wooooo", firebaseUid)
    const query = "SELECT member_id FROM member_firebase_mapping WHERE firebase_uid = ?";
    const result = await queryDatabase(query, firebaseUid);
    if (result.length === 0) {
      throw new Error("No mapping found for this Firebase UID");
    }
    console.log("result", result[0].member_id === memberId)
    console.log(result[0].member_id, memberId)
    console.log(typeof result[0].member_id, typeof memberId)
    // Compare the member_id from the database with the provided member_id

    return result[0].member_id === memberId;
  } catch (error) {
    console.error("Error fetching member-firebase mapping:", error);
    throw new Error(error.message);
  }
}
export async function getMemberById(id) {
  try {
    const query = "SELECT * FROM members WHERE member_id = ?";
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

export async function dbConnectMember(memberId, firebaseUid) {
  try {
    const query = "INSERT INTO member_firebase_mapping (member_id, firebase_uid) VALUES (?, ?)";
    const result = await queryDatabase(query, [memberId, firebaseUid]);
    return result;
  } catch (error) {
    console.error("Error connecting member:", error);
    throw new Error(error.message);
  }
}

export async function dbCreateMember(username) {
  try {
    const query = "INSERT INTO members (name) VALUES (?)";
    const result = await queryDatabase(query, username);
    console.log("result", result)
    return result.insertId;
  } catch (error) {
    console.error("Error creating member:", error);
    throw new Error(error.message);
  }
}

export async function dbUpdateMember(memberId, updatedData) {
  console.log("zooo", memberId, updatedData);
  try {
    const query = "UPDATE members SET ? WHERE member_id = ?";
    console.log(query);
    const result = await queryDatabase(query, [updatedData, memberId]);
    return result;
  } catch (error) {
    console.error("Error updating member:", error);
    throw new Error(error.message);
  }
}

export async function dbDeleteMember(memberId) {
  try {
    const Mappingquery = "DELETE FROM member_firebase_mapping WHERE member_id = ?";
    await queryDatabase(Mappingquery, memberId);

    const query = "DELETE FROM members WHERE member_id = ?";
    const result = await queryDatabase(query, memberId);
    return result;
  } catch (error) {
    console.error("Error deleting member:", error);
    throw new Error(error.message);
  }
}
