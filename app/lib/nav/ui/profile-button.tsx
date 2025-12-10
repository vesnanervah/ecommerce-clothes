import Image from "next/image";

export default function ProfileButton({ onClick }: { onClick: () => void}) {
    return <button onClick={onClick}>
        <Image height={14} width={14} alt="Profile button" src="/profile.svg"></Image>
    </button>
}