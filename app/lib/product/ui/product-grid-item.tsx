import Image from "next/image";
import Product from "../types/product";
import Link from "next/link";

export default function ProductGridItem({ product, className = "" }: { product: Product, className?: string }) {
    return <Link 
    href={`/shop/${product.id}`}
    className={`${className}`}
    >
        <div className="aspect-square relative bg-neutral-50">
            <Image src={product.previewUrl ?? "/placeholder.jpg"} fill alt="Photo of the product" className="object-contain" />
            <Image height={18} width={18} src={"/plus.svg"} alt="Add to cart button" className="absolute right-2 bottom-2"></Image>
        </div>
        <div className="pt-3">
            { product.name ?? "Product" }
        </div>
        <div className="">
            ${ product.price ?? 0 }
        </div>
    </Link>
}