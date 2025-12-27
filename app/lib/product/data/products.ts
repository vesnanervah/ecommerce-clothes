import promiseDelayed from "../../utils/promise-delayed";
import Product from "../types/product";

const mockProductList: Array<Product> = [
    {
        id: 0,
        name: "Walnut Winter Boots",
        price: 149,
        sizes: ["m", "xl"],
        previewUrl: "/boots.jpg",
        imageUrls: ["/boots.jpg", "/dress.png", "/jeans.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
    return promiseDelayed(mockProductList, 2000)
}


interface FetchProductDetailsArgs {
    id: string
}

export function fethProductDetails(args: FetchProductDetailsArgs) {
    return promiseDelayed<Product | null>(mockProductList[0]);
}