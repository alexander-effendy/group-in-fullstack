import express from "express";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const member = await getMemberById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(404).send({ message: "Member not found", error: error.message });
  }
});

router.post("/create", async (req, res) => {
  const userId = req.user.id
  
})

export default router;
