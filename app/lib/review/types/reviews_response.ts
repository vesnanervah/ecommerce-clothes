export interface ReviewsResponse {
    page: number;
    totalPages: number;
    reviews: Array<ReviewsResponse>;
}