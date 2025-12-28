
import { format } from "date-fns";
import { Review } from "../types/review";

export default function ReviewsListItem({ review }: { review: Review }) {
    const date = review.date ? format(review.date, "dd/MM/yy") : "";

    return <div
    className="flex flex-col md:flex-row gap-4 border-b border-neutral-400 pb-4 pt-4 italic"
    >
        <div
        className="w-72"
        >
            {review.author ?? "Buyer"}
        </div>
        <div
        className="text-xs w-full"
        >
            {review.text ?? "Review text"}
        </div>
        <div
        className="text-xs"
        >
            { date }
        </div>
    </div>
}