import LargeBtn from '@/components/Common/LargeBtn.tsx';
import { ILargeBtn } from '@/types/large-btn';

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
  return (
    <div className="select-tool">
      <p>Select the tool</p>
      <div className="select-tool__btns d-flex gap-3">
        {buttons.map((btn, i) => (
          <LargeBtn key={i} label={btn.label} icon={btn.icon} path={btn.path} isDisabled={btn.isDisabled as boolean} />
        ))}
      </div>
    </div>
  );
};

export default SelectPackageLock;
