import {
  dbConnectMember,
  dbCreateMember,
  dbDeleteMember,
  dbUpdateMember,
  isMemberIdMatchingUid,
} from "../models/members.models.js";



export async function createMember(username, firebaseUid) {
  try {
    const memberId = await dbCreateMember(username, firebaseUid);
    dbConnectMember(memberId, firebaseUid);
    return memberId;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update an existing member
export async function updateMember(memberId, updatedData) {
  try {
    await dbUpdateMember(memberId, updatedData);
    return { message: "Member Updated" };
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a member
export async function deleteMember(memberId) {
  try {
    await dbDeleteMember(memberId);
    return { message: "Member deleted" };
  } catch (error) {
    throw new Error(error.message);
  }
}
