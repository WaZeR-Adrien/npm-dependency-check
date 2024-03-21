import { ReactNode } from 'react';

interface Props {
  title: string | ReactNode;
  subtitle: string | ReactNode;
}

const TitleSection = ({ title, subtitle }: Props) => {
  return (
    <div className="title-section">
      <h4 className="fw-light">{subtitle}</h4>
      <h1 className="lh-1 mb-4 text-primary">{title}</h1>
    </div>
  );
};

export default TitleSection;
