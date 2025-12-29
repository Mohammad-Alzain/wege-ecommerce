import { IProduct } from "@/data/products";

export interface ICartItem extends IProduct {
  quantity: number;
}
export interface ICartState {
  cart: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}
