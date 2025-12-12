const backdropBlurElemId = "backdrop-blur";

export default function BackdropBlur() {
    return <div id={backdropBlurElemId} className={"hidden fixed top-0 left-0 h-screen w-screen z-1 transition-opacity opacity-0 backdrop-blur-xs"}></div>
}

export function enableBackDropBlur() {
    document.getElementById(backdropBlurElemId)?.classList.remove("hidden");
    setTimeout(() => {
        document.getElementById(backdropBlurElemId)?.classList.add("opacity-100");
    }, 50)

}

export function disableBackDropBlur() {
    document.getElementById(backdropBlurElemId)?.classList.remove("opacity-100");
    setTimeout(() => {
        document.getElementById(backdropBlurElemId)?.classList.add("hidden");
    }, 50)
}