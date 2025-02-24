import { useState } from 'react';

export function useToggle(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggle = (): void => setIsOpen((prev) => !prev);

  const close = (): void => setIsOpen(false);

  return { isOpen, toggle, close };
}
