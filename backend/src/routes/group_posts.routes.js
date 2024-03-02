import express from "express";
import { dbCreateGroupPost, dbDeleteGroupPost, getGroupPost } from "../models/group_posts.models.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const postData = req.body;
    const result = await dbCreateGroupPost(postData);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete("/delete/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedGroupPost = await dbDeleteGroupPost(postId);
    res.status(200).json({ message: 'Group post deleted successfully', groupPost: deletedGroupPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const groupPost = await getGroupPost(postId);
    res.status(200).json({ groupPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

