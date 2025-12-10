import Image from "next/image";

export default function ProfileButton() {
    return <button>
        <Image height={14} width={14} alt="Profile button" src="/profile.svg"></Image>
    </button>
}