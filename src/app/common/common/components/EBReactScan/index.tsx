// components/ReactScan.tsx
'use client';
import { JSX, useEffect } from 'react';
import { scan } from 'react-scan';

export default function EBReactScan(): JSX.Element {
  useEffect(() => {
    scan({ enabled: true });
  }, []);

  return <></>;
}
