import Link from "next/link";
import { oswald } from "../../common/ui/fonts";

export default function HomeButton() {
    return <Link href='/' className={`${oswald.className} font-bold text-2xl uppercase`}>
        EcommerceClothes
    </Link>
}