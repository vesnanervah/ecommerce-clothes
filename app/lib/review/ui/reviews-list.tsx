"uses client";

import { use } from "react";
import { Review } from "../types/review";
import ReviewsListItem from "./reviews-list-item";

export default function ReviewsList({ promisedReviews }: { promisedReviews: Promise<Array<Review>> }) {
    const reviews = use(promisedReviews);

    return  <div>
        { reviews.map(reviewToListItem) }
    </div>

    function reviewToListItem(review: Review) {
        return <ReviewsListItem key={review.id} review={review} />
    }
}