import { NavLink } from 'react-router-dom';
import type { CSSProperties, ReactNode } from 'react';
import '../App.css'

interface LinkWithIconProps {
  /** Destination path for the link */
  to: string;
  /** Label displayed next to the icon */
  label: string;
  /** Icon component (e.g., from react-icons) */
  icon: ReactNode;
  /** Optional styling for the container */
  style?: CSSProperties;
}

export const LinkWithIcon = ({ to, label, icon, style }: LinkWithIconProps) => {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      style={({ isActive }) => ({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        borderBottomStyle: isActive ? 'solid' : 'none',
        padding: '4pt 8pt',
        color: isActive ? 'var(--color-erikBlue)' : 'inherit',
        ...style,
      })}
    >
      {icon}
      <p>{label}</p>
    </NavLink>
  );
};
