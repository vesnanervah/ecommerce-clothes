import Product from "../types/product";

const mockProductList: Array<Product> = [
    {
        id: 0,
        name: "Walnut Winter Boots",
        price: 149,
        previewUrl: "/boots.jpg"
    },
    {
        id: 1,
        name: "Dress",
        price: 689,
        previewUrl: "/dress.png"
    },
    {
        id: 2,
        name: "Casual jeans",
        price: 59,
        previewUrl: "/jeans.jpg",
    },
    {
        id: 3,
        name: "Overcoat",
        price: 467,
        previewUrl: "/overcoat.png"
    },
    {
        id: 4,
        name: "Shirt",
        price: 119,
        previewUrl: "/shirt.jpg"
    },
    {
        id: 5,
        name: "Wide Jeans",
        price: 59,
        previewUrl: "/wide-jeans.jpg"
    },    
    {
        id: 6,
        name: "Transparent Shirt",
        price: 169,
        previewUrl: "/transparent-shirt.jpg"
    }
]

// TODO: load from server
interface FetchProductsArgs {
    featured?: string | null | undefined,
    category?: string | null | undefined,
    collection?: string | null | undefined,
}

export function fetchProducts(args: FetchProductsArgs) {
    return new Promise<Array<Product>>(resolve => setTimeout(() => {
        resolve(mockProductList)
    }, 2000))
}