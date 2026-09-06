import React from 'react';
import './Section.css';

interface SectionProps {
  title: string;
  body: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  side?: 'left' | 'right'; // default right
}

const Section: React.FC<SectionProps> = ({
  title,
  body,
  imageSrc,
  imageAlt = '',
  side = 'right',
}) => {
  const hasImage = !!imageSrc;
  const containerStyle = {
    flexDirection: side === 'left' ? 'row' as 'row' : 'row-reverse' as 'row-reverse',
    ...(hasImage ? {} : { border: '2pt solid var(--color-erikBlue)' }),
    ...(hasImage ? {} : { padding: '24pt' }),
  };
  return (
    <div className="sectionContainer" style={containerStyle}>
      {imageSrc && (<img src={imageSrc} alt={imageAlt} className="sectionImage" />)}
      <div className="sectionText">
        <h2>{title}</h2>
        <h3>{body}</h3>
      </div>
    </div>
  );
};

export default Section;
