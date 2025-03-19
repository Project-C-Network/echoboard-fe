import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

export const logout = (callbackUrl: string = '/', delay: number = 2000) => {
  toast.info('Logging out...');
  setTimeout(() => signOut({ callbackUrl }), delay);
};
