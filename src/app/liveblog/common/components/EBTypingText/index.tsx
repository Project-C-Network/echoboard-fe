import { motion } from 'framer-motion';

interface EBTypingTextProps {
  text: string;
  className: string;
}

export const EBTypingText: React.FC<EBTypingTextProps> = ({ text = '', className = '' }) => {
  const words = text.split('');

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px' }}>
      {words.map((char, index) => (
        <motion.span
          key={index}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
