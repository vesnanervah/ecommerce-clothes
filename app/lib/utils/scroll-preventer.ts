function preventScroll(e: Event){
    e.preventDefault();
}

export function enableDocumentScroll() {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
}

export function disableDocumentScroll() {
    window.addEventListener('wheel', preventScroll, {passive: false});
    window.addEventListener('touchmove', preventScroll, {passive: false});
}

