import LargeBtn from '@/components/Common/LargeBtn';
import { ILargeBtn } from '@/types/large-btn';
import { useDispatch, useSelector } from 'react-redux';
import { resetPackageLock } from '@/store/slices/package-lock.slice';
import { SESSION_PACKAGE_KEY } from '@/utils/constants';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';
import { useMemo } from 'react';

const SelectTool = () => {
  const dispatch = useDispatch();
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);

  const buttons: ILargeBtn[] = useMemo(
    () => [
      {
        label: (
          <span className="fw-light">
            Upgrade <span className="fw-semibold">{mainDependency}</span>
          </span>
        ),
        icon: 'cube-outline',
        path: 'upgrade-main-dep',
      },
      {
        label: (
          <span className="fw-light">
            Upgrade <span className="fw-semibold">Plugin</span>
          </span>
        ),
        icon: 'layers-outline',
        path: 'upgrade-plugin',
      },
      {
        label: 'Coming soon',
        icon: 'ban-outline',
        path: '',
        isDisabled: true,
      },
    ],
    [mainDependency],
  );

  const handleRemovePackageLock = () => {
    dispatch(resetPackageLock());
    sessionStorage.removeItem(SESSION_PACKAGE_KEY);
  };

  return (
    <div className="select-tool">
      <p>Select the tool</p>
      <div className="select-tool__btns d-flex gap-3">
        {buttons.map((btn) => (
          <LargeBtn
            key={btn.path}
            label={btn.label}
            icon={btn.icon}
            path={btn.path}
            isDisabled={btn.isDisabled as boolean}
          />
        ))}
      </div>
      <p className="select-tool__restart fst-italic text-danger" role="button" onClick={handleRemovePackageLock}>
        Remove package-lock.json and restart
      </p>
    </div>
  );
};

export default SelectTool;
