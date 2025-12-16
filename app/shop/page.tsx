import { Suspense } from "react";
import { fetchProducts } from "../lib/product/data/products"
import ProductsGrid from "../lib/product/ui/products-grid";
import { fetchCategories } from "../lib/product/data/categories";
import CategoriesFlow from "../lib/product/ui/categories-flow";

export default function Shop() {
    const promisedProducts = fetchProducts();
    const promisedCategories = fetchCategories()  

    return <div>
        <div 
        className="pl-8 pt-20 pr-8 pb-4 border-b border-neutral-300"
        >
            <h3 className="text-2xl">Shop</h3>
            <Suspense>
                <CategoriesFlow
                promisedCategories={promisedCategories}
                />
            </Suspense>
        </div>

        <Suspense>
            <ProductsGrid 
            promisedProducts={promisedProducts} 
            />
        </Suspense>
    </div>
}