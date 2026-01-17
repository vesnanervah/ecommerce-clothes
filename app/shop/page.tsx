import ProductsGrid from "../lib/product/ui/products-grid";
import { Suspense } from "react";
import DesktopSortButton from "../lib/product/ui/desktop-sort-button";
import MobileSortButton from "../lib/product/ui/mobile-sort-button";
import MobileSortMenu from "../lib/product/ui/mobile-sort-menu";
import BackdropBlur from "../lib/common/ui/backdrop-blur";
import { fetchProducts } from "../lib/product/data/products";
import CategoriesFlow from "../lib/category/view/categories-flow";

export default async function Shop(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
    const mobileSortMenuBackdropId = "mobile-sort-menu-backdrop";
    const searchParams = await props.searchParams; 
    const query = new URLSearchParams(searchParams ?? "");
    const featuredId = query.get("featured");
    const categoryId = query.get("category");
    const collectionId = query.get("collection");
    const promisedProducts = fetchProducts({ featured: featuredId, category: categoryId, collection: collectionId, })

    return <div className="relative">
        <div 
        className="pl-8 pt-8 pr-8 pb-4 border-b border-neutral-300"
        >
            <h3 className="text-2xl">Shop</h3>
            <div className="flex flex-col gap-4 pt-4 md:items-center md:flex-row md:justify-between">
                <Suspense fallback={<div></div>}>
                    <CategoriesFlow
                    />
                </Suspense>
                <div
                className="hidden md:block"
                >
                    <DesktopSortButton />
                </div>
                <div
                className="block md:hidden"
                >
                    <MobileSortButton mobileSortMenuBackdropId={mobileSortMenuBackdropId}/>
                </div>
            </div>
        </div>
        <Suspense
        fallback={<div className="p-8">Fetching products...</div>}
        >
            <ProductsGrid
            promisedProducts={promisedProducts}
            />
        </Suspense>

        <MobileSortMenu mobileSortMenuBackdropId={mobileSortMenuBackdropId}/>
        <BackdropBlur id={mobileSortMenuBackdropId} />
    </div>
}