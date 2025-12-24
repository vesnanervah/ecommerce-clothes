import Image from "next/image";

export default function SortButton({ onClick }: { onClick: () => void }) {
    return <button
            className="flex flex-row gap-1 items-center cursor-pointer"
            onClick={onClick}
            >
                Sort
                <Image 
                className="rotate-90 ml-1"
                height={8} 
                width={8}
                src={`/right-arrow.svg`}
                alt="sort button"
            />
            </button>
}