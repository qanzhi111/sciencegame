import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'featured' | 'interactive';
  hover?: boolean;
}

export default function Card({ children, className, variant = 'default', hover = false }: CardProps) {
  const baseStyles = 'rounded-xl border border-white/10 bg-secondary/50 backdrop-blur-sm';

  const variants = {
    default: '',
    featured: 'bg-gradient-to-br from-accent/10 to-transparent border-accent/30',
    interactive: 'cursor-pointer',
  };

  const hoverStyles = hover || variant === 'interactive'
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10'
    : '';

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], hoverStyles, className))}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('p-6 border-b border-white/5', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('p-6', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={clsx('p-6 pt-0 border-t border-white/5', className)}>
      {children}
    </div>
  );
}
