import { ReactNode } from 'react';
import TitleSection from '@/components/Common/TitleSection';

interface Props {
  title: string | ReactNode;
  subtitle: string;
  description: ReactNode;
  children: ReactNode;
}

const Section = ({ title, subtitle, description, children }: Props) => {
  return (
    <div className="section d-flex justify-content-between">
      <div className="section__left-container">
        <TitleSection title={title} subtitle={subtitle} />
        <div className="section__left-container__description">{description}</div>
      </div>
      <div className="section__right-container">{children}</div>
    </div>
  );
};

export default Section;
