import express from "express";
import { dbCreateGroupRequest, dbUpdateGroupRequestStatus, getGroupRequestById } from "../models/group_requests.models.js";
import { getMemberByUserId } from "../models/members.models.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { group_id, description } = req.body;
    const member_id = await getMemberByUserId(req.user.uid);
    console.log('kimakkkkkk', group_id, member_id);
    const result = await dbCreateGroupRequest(group_id, member_id, description);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put("/update/:requestId", async (req, res) => {
  try {
    const { requestId } = req.params;
    const { newStatus } = req.body;
    const updatedStatus = await dbUpdateGroupRequestStatus(requestId, newStatus);

    res.status(200).json(updatedStatus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/:requestId", async (req, res) => {
  try {
    const { requestId } = req.params;
    const groupRequest = await getGroupRequestById(requestId);
    res.status(200).json({ groupRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
