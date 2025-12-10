import Image from "next/image";

export default function SearchProductButton({ onClick }: { onClick: () => void }) {
    return <button onClick={onClick}>
        <Image height={14} width={14} alt="Search product button" src="/search.svg"></Image>
    </button>
}