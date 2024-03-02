import express from "express";
import { dbCreateReview, dbDeleteReview, getReview } from "../models/reviews.models";

router.post("/add", async (req, res) => {
    try {
        const { reviewedId, rating, comment } = req.body;
        const result = await dbCreateReview(reviewedId, rating, comment);

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