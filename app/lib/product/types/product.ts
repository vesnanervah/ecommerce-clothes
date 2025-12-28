export default interface Product {
    id: number,
    name?: string | undefined,
    price?: number | undefined,
    sizes?: Array<string> | undefined,
    imageUrls?: Array<string> | undefined,
    previewUrl?: string | undefined,
    description?: string | undefined,
}