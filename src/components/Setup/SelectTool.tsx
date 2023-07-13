import LargeBtn from '@/components/Common/LargeBtn/LargeBtn';
import { ILargeBtn } from '@/types/large-btn';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBan, faDiagramPredecessor } from '@fortawesome/free-solid-svg-icons';

const buttons: ILargeBtn[] = [
  {
    label: 'Upgrade React',
    icon: faReact,
    path: 'upgrade-react',
  },
  {
    label: 'Upgrade Dependency',
    icon: faDiagramPredecessor,
    path: 'upgrade-dependency',
  },
  {
    label: 'What is deprecated?',
    icon: faBan,
    path: 'what-is-deprecated',
    isDisabled: true,
  },
];

const SelectPackageLock = () => {
  return (
    <div className="select-tool">
      <p>Select the tool</p>
      <div className="select-tool__btns d-flex gap-3">
        {buttons.map((btn) => (
          <LargeBtn label={btn.label} icon={btn.icon} path={btn.path} isDisabled={btn.isDisabled as boolean} />
        ))}
      </div>
    </div>
  );
};

export default SelectPackageLock;
