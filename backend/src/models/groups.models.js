import { queryDatabase } from "../config/dbConfigs.js";

export async function dbGetGroupById(groupID) {
  try {
    const query = "SELECT * FROM groups WHERE group_id = ?";
    const result = await queryDatabase(query, groupID);
    if (result.length === 0) {
      throw new Error("Group Not Found");
    }
    return result[0];
  } catch (error) {
    console.error("Error fetching group:", error);
    throw new Error(error.message);
  }
}

export async function dbGetMembersByGroupId(groupId) {
  try {
    const query = `
      SELECT members.*
      FROM group_members
      INNER JOIN members ON group_members.member_id = members.member_id
      WHERE group_members.group_id = ?
    `;
    const result = await queryDatabase(query, [groupId]);
    return result;
  } catch (error) {
    console.error("Error getting members by group ID:", error);
    throw new Error(error.message);
  }
}