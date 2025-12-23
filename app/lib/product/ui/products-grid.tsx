import { fetchProducts } from "../data/products";
import Product from "../types/product";
import ProductGridItem from "./product-grid-item";

export default async function ProductsGrid({featuredId, categoryId, collectionId, className = "" }: {featuredId?: string | null | undefined, categoryId?: string | null | undefined, collectionId?: string | null | undefined, className?: string }) {
    const products = await fetchProducts({
        featured: featuredId, 
        category:categoryId, 
        collection: collectionId
    });

    return <div
    className={`p-8 grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full max-w-[1440px] mx-auto ${className}`}
    >
        { products.map(productToGridItem) }
    </div>

    function productToGridItem(product: Product) {
        return <ProductGridItem product={product} key={product.id} />
    }
}