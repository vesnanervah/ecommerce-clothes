import { fethProductDetails } from "@/app/lib/product/data/products";
import ProductImagesSlider from "@/app/lib/product/ui/product-images-slider";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const product = await fethProductDetails({id: params.id})
    const urls = product?.imageUrls ?? ["/placeholder.jpg"]
    if(!product) {
        // TODO: placeholder
        return <div>
            No such product
        </div>
    }

    return <div
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
        <div>
            <h3
            className="text-xl pb-1"
            >
                {product.name ?? "Product title"}
            </h3>
            <div
            className="pb-2"
            >
                ${product.price ?? 0}
            </div>
            <div>
                {product.description ?? "Description"}
            </div>
        </div>
    </div>
}