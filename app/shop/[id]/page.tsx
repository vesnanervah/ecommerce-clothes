import { fethProductDetails } from "@/app/lib/product/data/products";
import AddProductToCartButton from "@/app/lib/product/ui/add-product-to-cart-button";
import ProductImagesSlider from "@/app/lib/product/ui/product-images-slider";
import ProductSizesFlow from "@/app/lib/product/ui/product-sizes-flow";
import ReviewsPagList from "@/app/lib/review/ui/reviews-pag-list";

export default async function Page(props: { params: Promise<{ id: string }>, searchParams: Promise<{ size?: string }> }) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const product = await fethProductDetails({id: params.id});
    const urls = product?.imageUrls ?? ["/placeholder.jpg"];
    if(!product) {
        // TODO: placeholder
        return <div>
            No such product
        </div>
    }

    return <div>
        <div
        className="pt-8 pb-8 flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-6 md:pl-8 md:pr-8 max-w-5xl mx-auto"
        >
            <div 
            className="flex justify-end overflow-hidden pb-3"
            >
                <div className="aspect-square max-w-xl h-full w-full">
                    <ProductImagesSlider 
                    urls={urls} 
                    />
                </div>
            </div>
            <div
            className="flex flex-col gap-4 pl-4 pr-4 md:pl-0 nmd:pr-0"
            >
                <div
                >
                    <h3
                    className="text-xl"
                    >
                    {product.name ?? "Product title"}
                    </h3>
                    ${product.price ?? 0}
                </div>
                <div>
                    {product.description ?? "Description"}
                </div>
                <div
                >
                    <ProductSizesFlow 
                    sizes={product!.sizes!}
                    selectedSize={searchParams.size}
                />
                </div>

                <AddProductToCartButton productId={product.id} />
            </div>
        </div>
        <div
        className="w-full p-8"
        >
            <ReviewsPagList
            productId={parseInt(params.id)}
            >

            </ReviewsPagList>
        </div>
    </div>
}