import ToolBtn from '@/components/Setup/ToolBtn';
import { useSelector } from 'react-redux';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';
import { useMemo } from 'react';
import { IToolBtn } from '@/types/tool-btn';

const SelectTool = () => {
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);

  const buttons: IToolBtn[] = useMemo(
    () => [
      {
        label: 'upgrade',
        subLabel: mainDependency || '<Main Dep.>',
        icon: 'cube-outline',
        path: 'upgrade-main-dep',
        isDisabled: !mainDependency,
      },
      {
        label: 'upgrade',
        subLabel: 'plugin',
        icon: 'layers-outline',
        path: 'upgrade-plugin',
        isDisabled: !mainDependency,
      },
      {
        label: 'Deprecated',
        subLabel: 'deps. (wip)',
        icon: 'trash-bin-outline',
        path: '',
        isDisabled: true,
      },
    ],
    [mainDependency],
  );

  return (
    <div className="select-tool d-flex gap-3">
      {buttons.map((btn) => (
        <ToolBtn {...btn} />
      ))}
    </div>
  );
};

export default SelectTool;
