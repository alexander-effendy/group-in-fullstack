import { dbCreateReview, dbDeleteReview, getReview } from "../models/reviews.models.js";

export async function addReview(reviewedId, rating, comment) {
    try {
        const result = await dbCreateReview(reviewedId, rating, comment);
        return { message: "Review added successfully", reviewId: result.reviewId };
    } catch (error) {
        console.error("Error adding review:", error);
        throw new Error("Failed to add review");
    }
}

export async function removeReview(reviewId) {
    try {
        const deletedReview = await dbDeleteReview(reviewId);
        return { message: 'Review deleted successfully', review: deletedReview };
    } catch (error) {
        console.error("Error deleting review:", error);
        throw new Error("Failed to delete review");
    }
}

export async function fetchReview(reviewId) {
    try {
        const review = await getReview(reviewId);
        return { review };
    } catch (error) {
        console.error("Error fetching review:", error);
        throw new Error("Failed to fetch review");
    }
}
