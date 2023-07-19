import { memo } from 'react';
import { getReactRequirement, isCompatibleWithReactVersion } from '@/utils/packages.ts';
import { useSelector } from 'react-redux';
import { PackageJSON } from 'query-registry';
import packageLockSelectors from '@/store/selectors/package-lock.selectors.ts';
import CompatibilityResult from '@/components/Common/CompatibilityResult';

interface Props {
  plugin: PackageJSON;
}

const IsCompatibleWithCurrentReact = memo(({ plugin }: Props) => {
  const reactVersion = useSelector(packageLockSelectors.selectReactVersion);
  const isCompatible = isCompatibleWithReactVersion(plugin, reactVersion || '');
  const requirement = getReactRequirement(plugin);

  return (
    <CompatibilityResult
      isCompatible={isCompatible}
      compatibleDesc="Compatible with your React version"
      incompatibleDesc="Not compatible with your React version"
      requirement={requirement}
      yourVersion={reactVersion}
    />
  );
});

export default IsCompatibleWithCurrentReact;
