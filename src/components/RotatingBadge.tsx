import { useId, type ReactNode } from 'react';

interface RotatingBadgeProps {
  text: string;
  size?: number;
  fontSize?: number;
  letterSpacing?: number;
  className?: string;
  children?: ReactNode;
  textColor?: string;
}

export default function RotatingBadge({
  text,
  size = 160,
  fontSize = 11,
  letterSpacing = 4,
  className = '',
  children,
  textColor = 'currentColor',
}: RotatingBadgeProps) {
  const pathId = useId();
  const radius = 78;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="pj-rotate h-full w-full">
        <defs>
          <path
            id={pathId}
            d={`M 100,100 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fontFamily="Inter, sans-serif"
          fontSize={fontSize}
          fontWeight={700}
          letterSpacing={letterSpacing}
          fill={textColor}
          style={{ textTransform: 'uppercase' }}
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
