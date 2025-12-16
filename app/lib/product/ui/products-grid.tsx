"use client"
import { use } from "react";
import Product from "../types/product";
import ProductGridItem from "./product-grid-item";

export default function ProductsGrid({ promisedProducts, className = "" }: { promisedProducts: Promise<Array<Product>>, className?: string }) {
    const products = use(promisedProducts);

    return <div
    className={`p-8 grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full max-w-[1440px] mx-auto ${className}`}
    >
        { products.map(productToGridItem) }
    </div>

    function productToGridItem(product: Product) {
        return <ProductGridItem product={product} key={product.id} />
    }
}