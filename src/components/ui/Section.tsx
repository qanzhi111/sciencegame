import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={clsx('py-20', className)}>
      <div className={clsx(fullWidth ? 'w-full' : 'container mx-auto px-4')}>
        {children}
      </div>
    </section>
  );
}

interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}

export function AnimatedSection({ children, className, id, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={clsx('py-20', className)}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
}
