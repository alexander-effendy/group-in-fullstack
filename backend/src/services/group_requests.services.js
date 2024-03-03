import { dbCreateGroupRequest, dbUpdateGroupRequestStatus, getGroupRequestById } from "../models/group_requests.models.js";

export async function addGroupRequest(groupId, memberId, description) {
  try {
    const result = await dbCreateGroupRequest(groupId, memberId, description);
    return { message: "Group request added successfully", request_id: result.request_id };
  } catch (error) {
    throw new Error("Failed to add group request");
  }
}

export async function modifyGroupRequestStatus(requestId, newStatus) {
  try {
    const updatedStatus = await dbUpdateGroupRequestStatus(requestId, newStatus);
    return updatedStatus;
  } catch (error) {
    throw new Error("Failed to update group request status");
  }
}

export async function fetchGroupRequestById(requestId) {
  try {
    const groupRequest = await getGroupRequestById(requestId);
    return { groupRequest };
  } catch (error) {
    throw new Error("Failed to fetch group request by ID");
  }
}
