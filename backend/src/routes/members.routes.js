import express from "express";
import { deleteMember, updateMember } from "../services/members.services.js";
import { getMemberById } from "../models/members.models.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const member = await getMemberById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const uid = req.user.uid;
    const member_id = Number(req.params.id)
    const updatedMember = await updateMember(member_id, uid, req.body);
    res.status(200).send({ message: "Member updated", updatedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to update member", error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const uid = req.user.uid;
    const deletedMember = await deleteMember(req.params.id, uid);
    res.status(200).send({ message: "Member deleted", deletedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to delete member", error: error.message });
  }
});

export default router;
