import { ILargeBtn } from '@/types/large-btn.ts';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import IonIcon from '@reacticons/ionicons';

type Props = ILargeBtn;

const LargeBtn = ({ label, icon, path, isDisabled }: Props) => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => {
    if (!isDisabled) {
      navigate(path);
    }
  }, [navigate, path, isDisabled]);

  return (
    <div className={`large-btn ${isDisabled ? 'large-btn--disabled' : ''}`} role="button" onClick={handleNavigate}>
      <IonIcon
        className={`large-btn__icon ${isDisabled ? 'text-secondary' : 'text-primary'}`}
        name={icon as any}
        size="large"
      />
      <p className="large-btn__title h5">{label}</p>
    </div>
  );
};

export default LargeBtn;
