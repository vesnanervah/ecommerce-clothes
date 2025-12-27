"use client";

import { Suspense, useState } from "react";
import { fetchReviews } from "../data/reviews";
import ReviewsPag from "./reviews-pag";

export default function ReviewsPagList({ productId }: { productId: number }) {
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const promisedResp = fetchReviews({
        productId: productId,
        page: selectedPage
    })
    promisedResp.then((res) => setTotalPages(res.totalPages));
    
    return <div
    
    >

        <Suspense
    
        >

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