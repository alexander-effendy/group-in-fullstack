import express from "express";
import { deleteMember, updateMember } from "../services/members.services.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    console.log(req)
    const uid = req.user.uid;
    console.log(uid)
    const member = await getMemberById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const uid = req.user.uid;
    const updatedMember = await updateMember(req.params.id, req.body);
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