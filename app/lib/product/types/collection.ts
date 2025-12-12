import Product from "./product";

export interface Collection {
    name: string,
    imageUrl: string,
    products?: Array<Product> | undefined,
}