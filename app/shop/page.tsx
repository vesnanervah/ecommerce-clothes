import ProductsGrid from "../lib/product/ui/products-grid";
import CategoriesFlow from "../lib/product/ui/categories-flow";
import { Suspense } from "react";

export default async function Shop(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
    const searchParams = await props.searchParams; 
    const query = new URLSearchParams(searchParams ?? "");
    const featuredId = query.get("featured");
    const categoryId = query.get("category");
    const collectionId = query.get("collection")

    return <div>
        <div 
        className="pl-8 pt-20 pr-8 pb-4 border-b border-neutral-300"
        >
            <h3 className="text-2xl">Shop</h3>
            <Suspense>
                <CategoriesFlow
                />
            </Suspense>
        </div>
        <Suspense>
            <ProductsGrid 
            featuredId={featuredId}
            categoryId={categoryId}
            collectionId={collectionId}
            />
        </Suspense>
    </div>
}