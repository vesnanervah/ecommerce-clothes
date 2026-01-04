import Product from "../../product/types/product";

export default interface CartItem {
    product: Product;
    quantity: number;
}