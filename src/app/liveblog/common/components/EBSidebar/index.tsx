import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EBSidebarProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

const EBSidebar: React.FC<EBSidebarProps> = ({ isOpen, close, children }) => {
  return (
    <div className='relative lg:hidden'>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='fixed top-0 left-0 h-full w-64 bg-EBPrimary-100 text-white p-5 shadow-xl z-50'
      >
        <button onClick={close} className='absolute top-5 right-5 text-white text-2xl'>
          <i className='ri-close-large-fill' />
        </button>
        {children}
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 bg-EBDark bg-opacity-50 z-40'
          onClick={close}
        />
      )}
    </div>
  );
};

export default EBSidebar;
