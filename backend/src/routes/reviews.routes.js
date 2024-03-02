import express from "express";
import { dbCreateReview, dbDeleteReview, getReview } from "../models/reviews.models.js";
const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { reviewerId, rating, comment, reviewedId } = req.body;
        const result = await dbCreateReview(reviewerId, rating, comment, reviewedId);

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete("/delete/:reviewId", async (req, res) => {
    try {
        const { reviewId } = req.params;
        const deletedReview = await dbDeleteReview(reviewId);
        res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/:reviewId", async (req, res) => {
    try {
        const { reviewId } = req.params;
        const review = await getReview(reviewId);
        res.status(200).json({ review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;