'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import * as React from 'react';

export function EBTypingContent({
  text = 'Welcome',
  motionType = 'Typing',
  className = '',
}: {
  text?: string[] | string;
  motionType?: string;
  className?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [index, setIndex] = React.useState<number>(0);
  // eslint-disable-next-line security/detect-object-injection
  const key = `${text instanceof Array ? text[index] : text}`;

  React.useEffect(() => {
    if (motionType === 'Rotate' && text instanceof Array) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [text, motionType]);

  const renderContentAnimation = (animationType: string) => {
    const content = text instanceof Array ? text.join('') : text;

    switch (animationType) {
      case 'Typing':
        return (
          <h2 ref={ref} className={className}>
            {content.split('').map((letter: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        );
      case 'Blur':
        return (
          <motion.span
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className={className}
          >
            {content}
          </motion.span>
        );
      case 'Rotate':
        return (
          <AnimatePresence mode='wait'>
            <motion.span
              key={key}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
            >
              {key}
            </motion.span>
          </AnimatePresence>
        );
      default:
        return (
          <h2 ref={ref} className={className}>
            {content.split('').map((letter: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
        );
    }
  };

  return <>{renderContentAnimation(motionType)}</>;
}
