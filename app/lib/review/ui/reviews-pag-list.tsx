"use client";

import { Suspense, useState } from "react";
import { fetchReviews } from "../data/reviews";
import ReviewsPag from "./reviews-pag";
import ReviewsList from "./reviews-list";

export default function ReviewsPagList({ productId }: { productId: number }) {
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const promisedResp = fetchReviews({
        productId: productId,
        page: selectedPage
    })
    promisedResp.then((res) => setTotalPages(res.totalPages));
    const promisedReviews = promisedResp.then(resp => resp.reviews);
    
    return <div
    
    >

        <Suspense
        fallback= {
            <div
            className="flex justify-center pb-4 font-light"
            >
                Fetching reviews...
            </div>
        }
        >
            <div
            className="pb-6"
            >
                <ReviewsList
                promisedReviews={promisedReviews}
                />
            </div>
        </Suspense>
        <ReviewsPag 
        active={selectedPage}
        total={totalPages}
        onClick={onPagClick}
        />
    </div>

    function onPagClick(value: number) {
        if(value === selectedPage) return;
        setSelectedPage(value);
    }
}