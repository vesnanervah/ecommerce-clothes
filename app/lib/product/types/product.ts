import { ProductSize } from "./product-size";

export default interface Product {
    id: number,
    name?: string | undefined,
    price?: number | undefined,
    sizes?: Array<ProductSize> | undefined,
    imageUrls?: Array<string> | undefined,
    previewUrl?: string | undefined,
    description?: string | undefined,
}