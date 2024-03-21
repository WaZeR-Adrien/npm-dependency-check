import { ReactNode } from 'react';
import IonIcon from '@reacticons/ionicons';

interface Props {
  label: string | ReactNode;
  icon?: string;
  handleClick: () => void;
}

const Button = ({ label, icon, handleClick }: Props) => {
  return (
    <button className="button d-flex align-items-center pt-2 pb-2 ps-4 pe-4" onClick={handleClick}>
      <p className="button__label mb-0">{label}</p>
      {icon && <IonIcon className="button__icon ms-3" name={icon as any} size="large" />}
    </button>
  );
};

export default Button;
