"use client";

import Image from "next/image";
import Product from "../types/product";
import Link from "next/link";
import { cartSlice } from "../../cart/state/cart-slice";
import { useDispatch } from "react-redux";

export default function ProductGridItem({ product, className = "" }: { product: Product, className?: string }) {
    const dispatch = useDispatch();

    return <Link 
    href={`/shop/${product.id}`}
    className={`${className}`}
    >
        <div className="aspect-square relative bg-neutral-50">
            <Image src={product.previewUrl ?? "/placeholder.jpg"} fill alt="Photo of the product" className="object-contain" />
            <AddToCartButton />
        </div>
        <div className="pt-3">
            { product.name ?? "Product" }
        </div>
        <div className="">
            ${ product.price ?? 0 }
        </div>
    </Link>

    function AddToCartButton() {
        return <Image 
        height={22} 
        width={22} 
        src={"/plus.svg"} 
        alt="Add to cart button" 
        className="absolute right-2 bottom-2 p-0.5 transition-all scale-100 hover:scale-150 bg-transparent hover:bg-neutral-200/25 rounded-full"
        onClick={(e)  => onAddToCartClick(e as unknown as Event)}
        >
        </Image>
    }

    function onAddToCartClick(e: Event) {
        e.preventDefault()
        dispatch(cartSlice.actions.add({
            product: product
        }))
    }
}