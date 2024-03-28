import { shirts } from 'data'
import { create } from 'zustand'

interface ShirtState {
  shirt: any,
  shirts: any[],
  setShirt: (id:any) => void,
  setShirts: (name: string) => void,
}

const useShirtsStore = create<ShirtState>()((set) => ({
  shirt: {},
  shirts: [],
  setShirts: () => set((state) => ({ shirts: [...state.shirts, shirts] })),
  setShirt: (id) => set({ 
    shirt: shirts.find((shirt) => shirt.id === id)
   }),
}))

export default useShirtsStore