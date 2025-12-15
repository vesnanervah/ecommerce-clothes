import Product from "./product";

export interface Collection {
    id: number,
    name?: string | undefined,
    imageUrl?: string | undefined,
    products?: Array<Product> | undefined,
}