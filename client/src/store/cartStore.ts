
import { create } from 'zustand'

interface CartState {
  cart: any[],
  setCart: (id:any) => void,
}

const useCartStore = create<CartState>()((set) => ({
  cart: [],
  setCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}))

export default useCartStore