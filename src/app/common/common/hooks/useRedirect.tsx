import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useRedirect = (session, status: string, redirectUrl: string, delay: number = 3000) => {
  const router = useRouter();

  useEffect(() => {
    if (!session && status === 'unauthenticated') {
      const timer = setTimeout(() => {
        router.push(redirectUrl);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [session, status, redirectUrl, delay, router]);
};

export default useRedirect;
