import { Review } from "./review";

export interface ReviewsResponse {
    page: number;
    totalPages: number;
    reviews: Array<Review>;
}