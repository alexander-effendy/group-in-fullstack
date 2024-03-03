import {
  dbConnectMember,
  dbCreateMember,
  dbDeleteMember,
  dbGetMemberById,
  dbGetReviewsByMemberId,
  dbUpdateMember,
  getMemberByName,
  isUserIdCreated,
} from "../models/members.models.js";

export async function getMemberById(memberId) {
  try {
    const member = await dbGetMemberById(memberId);
    member.reviews = await dbGetReviewsByMemberId(memberId);
    member.courses = await dbGetCoursesByMemberId(memberId);
    return member;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createMember(username, firebaseUid) {
  try {
    if (getMemberByName().length > 0) {
      throw new Error("Username already exists");
    }

    if (await isUserIdCreated(firebaseUid)) {
      throw new Error("User already exists");
    }

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
