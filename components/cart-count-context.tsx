'use client';

import { createContext, useContext, useState } from 'react';

export const CartCountContext = createContext<
  | [number | null, React.Dispatch<React.SetStateAction<number | null>>]
>([null, () => {}]);

export function CartCountProvider({ children }: { children: React.ReactNode }) {
  const [optimisticCartCount, setOptimisticCartCount] = useState<number | null>(
    null
  );

  return (
    <CartCountContext.Provider
      value={[optimisticCartCount, setOptimisticCartCount]}
    >
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount(
  initialCount: number
): [number | null, React.Dispatch<React.SetStateAction<number | null>>] {
  const [count, setCount] = useContext(CartCountContext);

  if (count === undefined && setCount === undefined) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }

  if (count === null) {
    return [initialCount, setCount];
  }

  return [count, setCount];
}
