import { disableDocumentScroll, enableDocumentScroll } from "../../utils/scroll-preventer";


export default function BackdropBlur({ id }: { id: string }) {
    return <div
    id={id}
    className={"hidden fixed top-0 left-0 h-screen w-screen z-1 transition-opacity opacity-0 backdrop-blur-xs"}
    >

    </div>
}

export function enableBackDropBlur(id: string) {
    disableDocumentScroll();
    const elem = document.getElementById(id);
    elem?.classList.remove("hidden");
    setTimeout(() => {
        elem?.classList.add("opacity-100");
    }, 50)

}

export function disableBackDropBlur(id: string) {
    enableDocumentScroll();
    const elem = document.getElementById(id);
    elem?.classList.remove("opacity-100");
    setTimeout(() => {
        elem?.classList.add("hidden");
    }, 50)
}
