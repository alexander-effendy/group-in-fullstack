import express from "express";
import { deleteMember, updateMember } from "../services/members.services.js";
import { getMemberById, getMemberByUserId } from "../models/members.models.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const member = await getMemberById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

router.put("/update", async (req, res) => {
  try {
    const uid = req.user.uid;
    const member_id = await getMemberByUserId(uid);
    const updatedMember = await updateMember(member_id, req.body);
    res.status(200).send({ message: "Member updated", updatedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to update member", error: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const uid = req.user.uid;
    const member_id = await getMemberByUserId(uid);
    const deletedMember = await deleteMember(member_id);
    res.status(200).send({ message: "Member deleted", deletedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to delete member", error: error.message });
  }
});

export default router;
