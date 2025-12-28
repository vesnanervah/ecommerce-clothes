export function generateArray<I>(length: number, g: (index: number) => I): Array<I> {
    const it = [...Array(length).keys()].map((v, i) => g(i))
    return [...it];
}