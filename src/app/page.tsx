'use client';
import Image from 'next/image';
import Dicaprio from '../../public/Images/WelcomePage/S5s.gif';
import { EBButton } from './liveblog/common/components/EBButton';
import { EBTypingText } from './liveblog/common/components/EBTypingText';

export default function home() {
  return (
    <div className='bg-EBPrimary-100 container'>
      <div className='flex justify-end'>
        <div className='pt-4 pe-0 md:pe-5'>01</div>
      </div>
      <div className='grid lg:grid-cols-2 gap-4'>
        <div className='hidden lg:block'>
          <div className='flex justify-center items-center min-h-screen'>
            <div className='relative border-2 border-EBSecondary'>
              <h1 className='relative text-[100px] font-bold uppercase text-EBLight bg-clip-text px-5'>
                EchoBoard
              </h1>
              <Image
                src={Dicaprio}
                alt='GIF Background'
                className='absolute top-0 left-0 w-full h-full object-cover opacity-50'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <EBTypingText
            text='Welcome.'
            className='text-EBSecondary text-62 md:text-90 text-center font-dark'
          />
          <p className='text-EBLight text-16 text-center font-semibold max-w-[500px] pt-5 pb-5'>
            "Got a question? Ask away! Need an answer? Get it fast! Once resolved, it’s gone—like an
            echo in the wind!"
          </p>
          <p className='text-EBLight text-14 text-center font-semibold max-w-[470px] pb-5'>
            - "EchoBoard is a temporary chat-based Q&A platform where questions get quick answers
            and disappear once resolved. Engage, contribute, and keep discussions fresh!"
          </p>
          <EBButton>Sign in with Google</EBButton>
          <h1 className='flex items-center mt-5 text-center text-xl p-4 min-w-[550px]'>
            <span className='flex-grow h-[2px] bg-EBLight'></span>
            <span className='mx-2 text-EBLight font-semibold'>OR</span>
            <span className='flex-grow h-[2px] bg-EBLight'></span>
          </h1>
          <EBButton>Sign in as Guest</EBButton>
        </div>
      </div>
    </div>
  );
}
