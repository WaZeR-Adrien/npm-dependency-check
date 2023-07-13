import { ILargeBtn } from '@/types/large-btn';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

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
      <FontAwesomeIcon
        className={`large-btn__icon ${isDisabled ? 'text-secondary' : 'text-primary'}`}
        icon={icon}
        size="3x"
      />
      <p className="large-btn__title h5">{label}</p>
    </div>
  );
};

export default LargeBtn;
