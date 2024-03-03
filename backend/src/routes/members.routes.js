import express from "express";
import { createMember, deleteMember, getMemberById, updateMember } from "../services/members.services.js";
import { getMemberByUserId, isUserIdCreated } from "../models/members.models.js";
const router = express.Router();

router.get("/profile", async (req, res) => {
  //TODO get user profile, groups and reviews
  try {
    const uid = req.user.uid;
    const memberId = await getMemberByUserId(uid);
    const member = await getMemberById(memberId);
    res.status(200).send(member)
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
})

router.post("/create", async (req, res) => {
  try {
    const uid = req.user.uid;
    const username = req.body.username;
    const memberId = await createMember(username, uid);
    res.status(201).send({ message: "Member created", memberId });
  } catch (error) {
    res.status(400).send({ message: "Failed to create member", error: error.message });
  }
})

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
    const memberId = await getMemberByUserId(uid);
    const updatedMember = await updateMember(memberId, req.body);
    res.status(200).send({ message: "Member updated", updatedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to update member", error: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const uid = req.user.uid;
    const memberId = await getMemberByUserId(uid);
    const deletedMember = await deleteMember(memberId);
    res.status(200).send({ message: "Member deleted", deletedMember });
  } catch (error) {
    res.status(400).send({ message: "Failed to delete member", error: error.message });
  }
});

export default router;