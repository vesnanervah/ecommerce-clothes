"use client";

import { DarkCustomButton } from "../../common/ui/custom-button";

export default function AddProductToCartButton({ productId }: { productId: number }) {
    return <DarkCustomButton 
    text={"Add to Cart"}
    className="w-full" 
    />
}