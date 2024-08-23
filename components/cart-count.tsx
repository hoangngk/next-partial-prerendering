'use client';

import { useCartCount } from './cart-count-context';

export function CartCount({ initialCount }: { initialCount: number }) {
  const [count] = useCartCount(initialCount);
  
  return <span>{count}</span>;
}
