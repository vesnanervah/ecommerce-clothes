"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductSizesFlow({ sizes, selectedSize = null}:  { sizes: Array<string>, selectedSize?: string | null }) {
    
    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();

    return <div
    >
        <div
        className="text-xs pb-1"
        >
            Product Size:
        </div>

        <div
        className="flex gap-2"
        >
            { sizes.map(FlowItem)}
        </div>
    </div>

    function FlowItem(size: string) {
        return <button
        key={size}
        onClick={() => onClick(size)}
        className={clsx("font-bold border text-xs transition-colors duration-150 cursor-pointer h-8 w-8 flex justify-center items-center hover:border-black", { "border-black": selectedSize === size }, { "border-neutral-300":  selectedSize !== size})}
        >
            {size.toUpperCase()}
        </button>
    }

    function onClick(size: string) {
        if(size === selectedSize) return;
        const query = new URLSearchParams(searchParams);
        query.set("size", size);
        router.replace(`${path}?${query.toString()}`)
    }
}