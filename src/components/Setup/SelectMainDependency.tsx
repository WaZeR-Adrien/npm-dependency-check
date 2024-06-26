import { useDispatch, useSelector } from 'react-redux';
import { setMainDependency } from '@/store/slices/main-dependency.slice';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import SelectDependency from '@/components/Common/SelectDependency';

const SelectMainDependency = () => {
  const dispatch = useDispatch();
  const dependencies = useSelector(packageLockSelectors.selectDependencies);

  const handleSelectMainDependency = (dep: any) => {
    dispatch(setMainDependency(dep.value));
  };

  return (
    <div className="select-package">
      <SelectDependency
        dependencyNames={dependencies.map((dep) => dep.name)}
        handleChange={handleSelectMainDependency}
      />
    </div>
  );
};

export default SelectMainDependency;
