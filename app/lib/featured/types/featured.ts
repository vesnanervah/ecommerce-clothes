import Product from "./product";

export interface Featured {
    id: number,
    name?: string | undefined,
    imageUrl?: string | undefined,
    products?: Array<Product> | undefined,
}