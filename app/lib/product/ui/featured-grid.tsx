"use client";

import { use } from "react";
import { Featured } from "../types/featured";
import FeaturedGridItem from "./featured-grid-item";

const emptyFeatured: Array<Featured> = Array.from(Array(3).keys(), (v, k) => {
    return {
        id: k
    }
});

export default function FeaturedGrid({ promisedFeatured, className = "" }: { promisedFeatured: Promise<Array<Featured>>, className?: string }) {
    const featured = use(promisedFeatured)

    return <div className={`flex flex-col gap-6 xl:gap-10 md:grid md:grid-cols-3 ${className}`}>
        {featured.map(featuredToElem)}
    </div>

    function featuredToElem(f: Featured) {
        return <FeaturedGridItem featured={f} key={f.id}></FeaturedGridItem>
    }
}

export function FeaturedGridSceleton({ className = "" }: { className?: string }) {

    return <div className={`flex flex-col gap-6 md:grid md:grid-cols-3 xl:gap-10 ${className}`}>
        {emptyFeatured.map(featuredToElem)}
    </div>

    function featuredToElem(f: Featured) {
        return <FeaturedGridItem featured={f} key={f.id}></FeaturedGridItem>
    }
}
