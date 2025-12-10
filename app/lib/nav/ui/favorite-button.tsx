import Image from "next/image";

export default function FavoriteButton() {
    return <button className="flex text-xs items-center">
        <Image height={14} width={14} src="/favorite.svg" alt="Favorites button"></Image>
        {/* Todo: favorites logic */}
        <span>0</span>
    </button>
}