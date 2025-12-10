const backdropBlurElemId = "backdrop-blur";

export default function BackdropBlur() {
    // TODO: disable scroll if component enabled
    
    return <div id={backdropBlurElemId} className={"fixed top-0 left-0 h-screen w-screen z-1 transition-opacity opacity-0 backdrop-blur-xs"}></div>
}

export function enableBackDropBlur() {
    document.getElementById(backdropBlurElemId)?.classList.add("opacity-100");
}

export function disableBackDropBlur() {
    document.getElementById(backdropBlurElemId)?.classList.remove("opacity-100");
}