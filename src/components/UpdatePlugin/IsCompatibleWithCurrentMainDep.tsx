import { memo } from 'react';
import { getReactRequirement, isCompatibleWithReactVersion } from '@/utils/packages';
import { useSelector } from 'react-redux';
import { PackageJSON } from 'query-registry';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import CompatibilityResult from '@/components/Common/CompatibilityResult';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

interface Props {
  plugin: PackageJSON;
}

const IsCompatibleWithCurrentMainDep = memo(({ plugin }: Props) => {
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);
  const reactVersion = useSelector((state) => packageLockSelectors.selectDependencyVersion(state, mainDependency));
  const isCompatible = isCompatibleWithReactVersion(plugin, reactVersion || '');
  const requirement = getReactRequirement(plugin);

  return (
    <CompatibilityResult
      isCompatible={isCompatible}
      compatibleDesc={`Compatible with your ${mainDependency} version`}
      incompatibleDesc={`Not compatible with your ${mainDependency} version`}
      requirement={requirement}
      yourVersion={reactVersion}
    />
  );
});

export default IsCompatibleWithCurrentMainDep;
