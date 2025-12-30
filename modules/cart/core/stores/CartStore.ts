import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { ICartState } from "../interfaces";
import { toast } from "sonner";

const noopStorage: StateStorage = {
  getItem: async () => null,
  setItem: async () => {},
  removeItem: async () => {},
};

const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          toast.success(
            `Increased product quantity in cart now you have ${
              existingItem.quantity + 1
            } of it in the cart`,
            {
              classNames: {
                content: " text-green-600",
                icon: " text-green-600",
              },
            }
          );
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          toast.success(`Product added to cart`, {
            classNames: { content: " text-blue-600", icon: " text-blue-600" },
          });
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },
      updateQuantity: (id, quantity) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "wege-cart-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : noopStorage
      ),
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export default useCartStore;
