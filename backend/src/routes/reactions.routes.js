import express from "express";
import { addReaction, deleteReaction } from "../services/reactions.services.js";
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const uId = req.user.uid;
    const { postId, reactionType } = req.body;
    await addReaction(uId, postId, reactionType)
    res.status(201).send('Reaction added')
  } catch (error) {
    throw new Error(error.message);
  }
})

router.delete('/delete', async (req, res) => { 
  try {
    const uId = req.user.uid;
    const { postId } = req.body;
    await deleteReaction(uId, postId)
    res.status(200).send('Reaction deleted')
  } catch (error) {
    throw new Error(error.message);
  }
})

export default router;
