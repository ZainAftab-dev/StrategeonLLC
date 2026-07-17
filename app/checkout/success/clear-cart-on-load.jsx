'use client';

import { useEffect } from 'react';

export default function ClearCartOnLoad() {
  useEffect(() => {
    try {
      localStorage.removeItem('strategeon-cart');
    } catch {
      // localStorage unavailable; nothing to clean up
    }
  }, []);

  return null;
}
