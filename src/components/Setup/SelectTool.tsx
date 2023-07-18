import LargeBtn from '@/components/Common/LargeBtn.tsx';
import { ILargeBtn } from '@/types/large-btn';
import { useDispatch } from 'react-redux';
import { reset as resetPackageLock } from '@/store/slices/package-lock.slice.ts';

const buttons: ILargeBtn[] = [
  {
    label: 'Upgrade React',
    icon: 'logo-react',
    path: 'upgrade-react',
  },
  {
    label: 'Upgrade Dependency',
    icon: 'layers-outline',
    path: 'upgrade-plugin',
  },
  {
    label: 'What is deprecated?',
    icon: 'ban-outline',
    path: 'what-is-deprecated',
    isDisabled: true,
  },
];

const SelectPackageLock = () => {
  const dispatch = useDispatch();

  return (
    <div className="select-tool">
      <p>Select the tool</p>
      <div className="select-tool__btns d-flex gap-3">
        {buttons.map((btn, i) => (
          <LargeBtn key={i} label={btn.label} icon={btn.icon} path={btn.path} isDisabled={btn.isDisabled as boolean} />
        ))}
      </div>
      <p
        className="select-tool__restart fst-italic text-danger"
        role="button"
        onClick={() => dispatch(resetPackageLock({}))}>
        Remove package-lock.json and restart
      </p>
    </div>
  );
};

export default SelectPackageLock;
