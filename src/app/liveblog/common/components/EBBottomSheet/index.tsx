import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface EBBottomSheetProps {
  children: ReactNode;
}

export const EBBottomSheet: React.FC<EBBottomSheetProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSheet = (_: Event, { offset: { y } }: { offset: { y: number } }): void => {
    setIsOpen(y <= 100);
  };

  return (
    <div
      className='fixed bottom-0 left-0 sm:w-[100%] lg:w-[70%] bg-EBPrimary-100/60 backdrop-blur-md rounded-t-3xl shadow-lg'
      style={{
        height: isOpen ? '50vh' : '80px',
        transition: 'height 0.2s ease-in-out',
      }}
    >
      <motion.div
        drag='y'
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={toggleSheet}
        className='w-full h-10 cursor-pointer flex justify-center items-center'
      >
        <div className='w-12 h-2 bg-EBSecondary rounded-full' />
      </motion.div>
      <div className={`h-full ${isOpen && 'overflow-y-auto'} p-4`}>
        <p className='text-center text-EBLight'>Drag down to minimize, drag up to expand</p>
        {children}
      </div>
    </div>
  );
};
