import { dbGetGroupById, dbGetMembersByGroupId } from "../models/groups.models";

export async function getGroupById (groupId) {
  const group = await dbGetGroupById(groupId);
  group.members = await dbGetMembersByGroupId(groupId);

  return group;
}