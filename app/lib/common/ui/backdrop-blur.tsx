import { disableDocumentScroll, enableDocumentScroll } from "../../utils/scroll-preventer";

const backdropBlurElemId = "backdrop-blur";

const getElem = () => document.getElementById(backdropBlurElemId);

export default function BackdropBlur() {
    return <div id={backdropBlurElemId} className={"hidden fixed top-0 left-0 h-screen w-screen z-1 transition-opacity opacity-0 backdrop-blur-xs"}></div>
}

export function enableBackDropBlur() {
    disableDocumentScroll();
    const elem = getElem();
    elem?.classList.remove("hidden");
    setTimeout(() => {
        elem?.classList.add("opacity-100");
    }, 50)

}

export function disableBackDropBlur() {
    enableDocumentScroll();
    const elem = getElem();
    elem?.classList.remove("opacity-100");
    setTimeout(() => {
        elem?.classList.add("hidden");
    }, 50)
}

export function backDropBlurEnabled() {
    return !(getElem()?.classList.contains("hidden") ?? true)
}