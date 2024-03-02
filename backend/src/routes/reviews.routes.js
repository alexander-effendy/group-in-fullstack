import express from "express";

router.get("/add", async (req, res) => {
    try {
        const reviews = await addReview(req, body);
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/delete/:reviewId", async (req, res) => {
    try {
        const { reviewId } = req.params;

        const deletedReview = await deleteReview(reviewId);

        if (deletedReview) {
            res.status(200).json({ message: 'Review deleted successfully', review: deletedReview });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});