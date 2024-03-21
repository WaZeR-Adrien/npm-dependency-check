import { IToolBtn } from '@/types/tool-btn';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import IonIcon from '@reacticons/ionicons';

type Props = IToolBtn;

const ToolBtn = ({ label, subLabel, icon, path, isDisabled }: Props) => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => {
    if (!isDisabled) {
      navigate(path);
    }
  }, [navigate, path, isDisabled]);

  return (
    <div
      className={`tool-btn bg-white d-flex justify-content-center align-items-center ${isDisabled ? 'tool-btn--disabled' : ''}`}
      role="button"
      onClick={handleNavigate}>
      <div className="tool-btn__content text-center text-truncate d-block">
        <IonIcon className="tool-btn__icon text-primary mb-3" name={icon as any} size="large" />
        <p className="tool-btn__title h6 text-uppercase fw-normal mb-0">{label}</p>
        <p className="tool-btn__title h6 text-uppercase fw-semibold text-truncate">{subLabel}</p>
      </div>
    </div>
  );
};

export default ToolBtn;
