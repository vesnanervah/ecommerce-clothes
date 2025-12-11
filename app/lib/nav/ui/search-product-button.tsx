import Image from "next/image";
export const searchProductButtonId = "search-product-button";

export default function SearchProductButton({ onClick, id }: { onClick: () => void, id?: string | undefined}) {
    return <button id={id} onClick={onClick}>
        <Image height={14} width={14} alt="Search product button" src="/search.svg"></Image>
    </button>
}