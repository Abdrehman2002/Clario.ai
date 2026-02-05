import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
  padding?: 'default' | 'large' | 'none';
  background?: 'gradient' | 'solid' | 'none';
}

const maxWidths = {
  default: 'max-w-[1200px]',
  narrow: 'max-w-[900px]',
  wide: 'max-w-[1400px]',
  full: 'max-w-full'
};

const paddings = {
  default: 'px-6 md:px-8 lg:px-12',
  large: 'px-8 md:px-12 lg:px-16',
  none: ''
};

const backgrounds = {
  gradient: 'bg-gradient-to-b from-black via-[#0A0510] to-black',
  solid: 'bg-black',
  none: ''
};

/**
 * SectionWrapper - Enterprise-grade section container
 * Ensures consistent max-width, padding, and prevents layout shift across all screen sizes
 *
 * @example
 * <SectionWrapper maxWidth="default" padding="default">
 *   <YourContent />
 * </SectionWrapper>
 */
export function SectionWrapper({
  children,
  className = '',
  maxWidth = 'default',
  padding = 'default',
  background = 'none'
}: SectionWrapperProps) {
  return (
    <section className={`relative overflow-hidden ${backgrounds[background]} ${className}`}>
      <div className={`${maxWidths[maxWidth]} mx-auto ${paddings[padding]}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * ContentContainer - For inner content blocks
 * Use inside SectionWrapper for nested max-width constraints
 */
export function ContentContainer({
  children,
  className = '',
  maxWidth = 'default'
}: Omit<SectionWrapperProps, 'padding' | 'background'>) {
  return (
    <div className={`${maxWidths[maxWidth]} mx-auto ${className}`}>
      {children}
    </div>
  );
}
