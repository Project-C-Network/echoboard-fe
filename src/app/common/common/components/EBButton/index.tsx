import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EBButtonProps {
  children: ReactNode;
  className?: string;
}

export const EBButton: React.FC<EBButtonProps> = ({
  children,
  className = 'mt-4 px-6 py-3 min-w-[250px] text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-[#03a9f4] to-[#ffeb3b]',
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
    >
      {children}
    </motion.button>
  );
};
