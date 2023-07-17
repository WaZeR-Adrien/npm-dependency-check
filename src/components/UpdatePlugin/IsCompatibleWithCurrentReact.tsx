import { memo } from 'react';
import { getReactRequirement, isCompatibleWithReactVersion } from '@/utils/packages.ts';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors.ts';
import { PackageJSON } from 'query-registry';

interface Props {
  plugin: PackageJSON;
}

const IsCompatibleWithCurrentReact = memo(({ plugin }: Props) => {
  const reactVersion = useSelector(packageLockSelectors.selectReactVersion);
  const isCompatible = isCompatibleWithReactVersion(plugin, reactVersion || '');

  return (
    <p>
      {isCompatible
        ? 'Your React version is compatible with this plugin version'
        : 'Not compatible with your React version. The requirement of this plugin version is : ' +
          getReactRequirement(plugin)}
    </p>
  );
});

export default IsCompatibleWithCurrentReact;
