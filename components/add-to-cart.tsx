'use client';

import { useState } from 'react';
import { useCartCount } from './cart-count-context';

export function AddToCart({ initialCartCount }: { initialCartCount: number }) {
  const [isPending, setIsPending] = useState(false);
  const [, setCartCount] = useCartCount(initialCartCount);

  const addToCart = () => {
    document.cookie = `_cart_count=${initialCartCount + 1}; path=/; max-age=${
      60 * 60 * 24 * 30
    }};`;
    setCartCount(initialCartCount + 1);
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
        onClick={addToCart}
        disabled={isPending}
      >
        Add to Cart
        {isPending ? (
          <div className="absolute right-2 top-1.5" role="status">
            <div
              className="
          h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent"
            />
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
      </button>
    </div>
  );
}
