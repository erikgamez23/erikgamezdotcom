import { Link } from 'react-router-dom';
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
    <Link to={to} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', ...style }}>
      {icon}
      <p>{label}</p>
    </Link>
  );
};
