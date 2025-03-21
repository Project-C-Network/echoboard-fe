'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { EBButton } from '../common/common/components/EBButton';
import EBSessionToast from '../common/common/components/EBSessionToast';
import useRedirect from '../common/common/hooks/useRedirect';
import { logout } from '../common/utils';
import { EBBottomSheet } from './common/components/EBBottomSheet';
import EBSidebar from './common/components/EBSidebar';
import { useToggle } from './common/hooks';

const LiveBlogPage = () => {
  const { close, isOpen, toggle } = useToggle();
  const { data: session, status } = useSession();

  useRedirect(session, status, '/');

  if (status === 'loading') return <p>Loading...</p>;

  if (!session)
    return (
      <>
        <p>Authenication failed!</p>
      </>
    );

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className='sm:container-fluid lg:container'>
        <div className='relative w-full h-screen shadow-sm shadow-gray-400 overflow-hidden'>
          <div className='absolute z-20 top-0 right-0 left-0 h-48 px-3 text-lg font-manrope font-semibold text-white bg-EBPrimary-100'>
            <div className='pt-5'>
              <i className='ri-menu-line text-26 lg:hidden' role='button' onClick={toggle} />
            </div>
            <p className='text-center text-EBLight pt-3'>Marque Text</p>
          </div>
          <div className='flex pt-48 w-full h-screen'>
            <div className='lg:w-[70%] xl:w-[80%] overflow-auto h-screen bg-EBLight p-3'>
              <p className='text-center text-EBDark'>Chat</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <EBBottomSheet>
                <p className='text-center text-EBLight pt-5'>Chat Comment History</p>
              </EBBottomSheet>
            </div>
            <div className='lg:w-[30%] xl:w-[20%] h-screen bg-EBPrimary-100 p-3 sm:hidden lg:block'>
              <p className='text-center text-EBLight'>Profile</p>
              {session && (
                <>
                  <p>Name: {session.user?.name}</p>
                  <p>Email: {session.user?.email}</p>
                  <EBButton handleClick={handleLogout}>
                    <div className='flex items-center justify-center'>Logout</div>
                  </EBButton>
                </>
              )}
            </div>
          </div>
          <EBSidebar isOpen={isOpen} close={close}>
            <p className='mt-8'>Profile</p>
          </EBSidebar>
        </div>
      </div>
      <EBSessionToast status={status} />
    </>
  );
};

export default LiveBlogPage;
