'use client';
import { SessionProvider } from 'next-auth/react';
import { SessionProps } from '../utils/interfaces';

export default function SessionProviders({ children }: SessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
