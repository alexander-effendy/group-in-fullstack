import {
  dbAddMemberToGroup,
  dbCreateGroup,
  dbDeleteGroup,
  dbGetGroupById,
  dbGetMembersByGroupId,
} from "../models/groups.models.js";
import { getMemberByUserId } from "../models/members.models.js";

export async function getGroupById(groupId) {
  const group = await dbGetGroupById(groupId);
  group.members = await dbGetMembersByGroupId(groupId);

  return group;
}

export async function createGroup(groupData, userId) {
  const memberId = await getMemberByUserId(userId);
  // TODO: Add group leader to group members

  groupData.group_leader = memberId;
  const result = await dbCreateGroup(groupData);

  await dbAddMemberToGroup(result.insertId, memberId);
  return result;
}

export async function deleteGroup(groupId, userId) {
  const memberId = await getMemberByUserId(userId);
  const result = await getGroupById(groupId);

  if (result.group_leader !== memberId) {
    throw new Error("You are not the group leader");
  }

  await dbDeleteGroup(groupId);
}

export async function addMemberToGroup(groupId, userId) {

}