import { memo } from 'react';
import { getReactRequirement, isCompatibleWithReactVersion } from '@/utils/packages.ts';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors.ts';
import { PackageJSON } from 'query-registry';
import IonIcon from '@reacticons/ionicons';

interface Props {
  plugin: PackageJSON;
}

const IsCompatibleWithCurrentReact = memo(({ plugin }: Props) => {
  const reactVersion = useSelector(packageLockSelectors.selectReactVersion);
  const isCompatible = isCompatibleWithReactVersion(plugin, reactVersion || '');
  const requirement = getReactRequirement(plugin);

  return (
    <div className="compatible-with-react text-center">
      {isCompatible ? (
        <>
          <IonIcon name="checkmark-done-outline" size="large" className="compatible-with-react__icon text-success" />
          <p className="compatible-with-react__description">Compatible with your React version</p>
        </>
      ) : (
        <>
          <IonIcon name="close-outline" size="large" className="compatible-with-react__icon text-danger" />
          <p className="compatible-with-react__description">Not compatible with your React version.</p>
        </>
      )}
      <p className="compatible-with-react__requirement fst-italic">
        Requirement: {requirement} / Yours: {reactVersion}
      </p>
    </div>
  );
});

export default IsCompatibleWithCurrentReact;
