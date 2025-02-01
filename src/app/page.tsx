'use client';
import { useEffect } from 'react';
import { useDarkMode } from './common/common/hooks/useDarkMode';
import { EBButton } from './liveblog/common/components/EBButton';
import { EBTypingText } from './liveblog/common/components/EBTypingText';

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const savedMode: string | null = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
      document.body.classList.add('darkModeEnabled');
    } else {
      document.body.classList.add('lightModeEnabled');
    }
  }, []);

  return (
    <div className='md:container w-container-fluid'>
      <div className='relative'>
        <button type='button' className='absolute top-5 right-0' onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className='ri-moon-clear-fill text-EBLight text-32' />
          ) : (
            <i className='ri-sun-cloudy-fill text-EBSecondary text-32' />
          )}
        </button>
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className='hidden lg:block'>
          <div className='flex items-center justify-start lg:justify-center h-screen'>
            <h1 className='relative sm:text-[62px] lg:text-[65px] xl:text-[100px] welcomePageHeroSection font-bold uppercase text-EBLight bg-clip-text px-5'>
              EchoBoard
            </h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center min-h-screen sm:mt-[60px] md:mt-[30px] lg:[0px]'>
          <EBTypingText
            text='Welcome.'
            className='text-EBSecondary sm:text-72 lg:text-62 xl:text-72 text-center font-dark'
          />
          <p className='text-EBLight sm:text-16 md:text-14 xl:text-16 text-center font-semibold max-w-[500px] pt-5 pb-5'>
            "Got a question? Ask away! Need an answer? Get it fast! Once resolved, it’s gone—like an
            echo in the wind!"
          </p>
          <p className='text-EBLight sm:text-16 md:text-14 xl:text-16 text-center font-semibold max-w-[470px] pb-5'>
            - "EchoBoard is a temporary chat-based Q&A platform where questions get quick answers
            and disappear once resolved. Engage, contribute, and keep discussions fresh!"
          </p>
          <EBButton>
            <div className='flex items-center justify-center'>
              <i className='ri-google-fill text-26 pe-3' /> Sign in with Google
            </div>
          </EBButton>
          <h1 className='flex items-center mt-5 text-center text-xl p-4 min-w-[550px]'>
            <span className='flex-grow h-[2px] bg-EBLight'></span>
            <span className='mx-2 text-EBLight font-semibold'>OR</span>
            <span className='flex-grow h-[2px] bg-EBLight'></span>
          </h1>
          <EBButton>
            <div className='flex items-center justify-center'>
              <i className='ri-user-follow-line text-26 pe-3' /> Sign in as Guest
            </div>
          </EBButton>
        </div>
      </div>
    </div>
  );
}
