import Image from "next/image";

export default function BurgerButton({ onClick, className = '' }: { onClick: () => void, className: string}) {
    return <button className={`h-5 w-5 ${className}`} onClick={onClick}>
        <Image height={60} width={60} alt="Toggle mobile navigation" src={'/burger.png'}></Image>
    </button>
}