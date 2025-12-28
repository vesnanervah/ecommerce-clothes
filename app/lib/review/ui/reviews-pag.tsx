"use client";

import clsx from "clsx";
import { generateArray } from "../../utils/generate-array";

export default function ReviewsPag({ active, total, onClick }: { active: number, total: number, onClick: (value: number) => void }) {

    if( total === 0 ) {
        return;
    }
    
    const values = generateArray(total, (i) => i + 1);
    
    return <div
    className="flex gap-2 mx-auto justify-center"
    >
        { values.map(ValueToElem) }
    </div>

    function ValueToElem(value: number) {
        return <button
        onClick={() => onClick(value)}
        className={
            clsx(
                "h-8 w-7 flex items-center justify-center transition-colors duration-150 hover:bg-black hover:text-white hover:cursor-pointer", {
                    "bg-black text-white": value === active
                }, {
                    "bg-transparent text-neutral-700": value !== active 
                }
            )
        }
        key={value}
        >
            {value}
        </button>
    }
}