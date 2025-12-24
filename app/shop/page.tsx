import ProductsGrid from "../lib/product/ui/products-grid";
import CategoriesFlow from "../lib/product/ui/categories-flow";
import { Suspense } from "react";
import DesktopSortButton from "../lib/product/ui/desktop-sort-button";
import MobileSortButton from "../lib/product/ui/mobile-sort-button";
import MobileSortMenu from "../lib/product/ui/mobile-sort-menu";
import BackdropBlur from "../lib/common/ui/backdrop-blur";

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

    return <div className="relative">
        <div 
        className="pl-8 pt-20 pr-8 pb-4 border-b border-neutral-300"
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
        <Suspense>
            <ProductsGrid 
            featuredId={featuredId}
            categoryId={categoryId}
            collectionId={collectionId}
            />
        </Suspense>

        <MobileSortMenu mobileSortMenuBackdropId={mobileSortMenuBackdropId}/>
        <BackdropBlur id={mobileSortMenuBackdropId} />
    </div>
}