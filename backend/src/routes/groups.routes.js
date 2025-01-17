import express from "express";
import {
  createGroup,
  deleteGroup,
  getGroupById,
} from "../services/groups.services.js";
import { dbGetGroupsByMemberId } from "../models/groups.models.js";
const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const uid = req.user.uid;
//     const member = await getMemberByUserId(uid);
//     const groups = await dbGetGroupsByMemberId;
//     res.status(200).send(groups);
//   } catch (error) {
//     res.status(404).send({ message: "Groups not found", error: error.message });
//   }
// })

router.get("/:id", async (req, res) => {
  try {
    const member = await getGroupById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const userId = req.user.uid;
    console.log(req.body, userId);
    const result = await createGroup(req.body, userId);
    res.status(201).send({ message: "Group created", result });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Failed to create group", error: error.message });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const { groupId } = req.body;
    const userId = req.user.uid;

    deleteGroup(groupId, userId);

    res.status(201).send({ message: "Group created", result });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Failed to create group", error: error.message });
  }
});

export default router;
