// components/SessionToast.tsx
'use client';

import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EBSessionToast({ status }) {
  useEffect(() => {
    if (status === 'unauthenticated') {
      toast.error('You must be logged in to access this page.');
    }
  }, [status]);

  return <ToastContainer />;
}
