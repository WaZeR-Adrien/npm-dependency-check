import SelectDependency from '@/components/Common/SelectDependency';
import SelectPluginVersion from '@/components/UpdatePlugin/SelectPluginVersion';
import IsCompatibleWithCurrentMainDep from '@/components/UpdatePlugin/IsCompatibleWithCurrentMainDep';
import { useState } from 'react';
import { PropsValue } from 'react-select';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';

const UpdatePlugin = () => {
  const [pluginSelected, setPluginSelected] = useState<PropsValue<any>>(null);
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const dependencyNames = useSelector(packageLockSelectors.selectPluginNames);

  const handlePluginChange = (option: PropsValue<any>) => {
    setPluginSelected(option);
    setVersionSelected(null);
  };

  return (
    <>
      <SelectDependency dependencyNames={dependencyNames} handleChange={handlePluginChange} />

      {pluginSelected !== null && (
        <SelectPluginVersion
          name={pluginSelected.value}
          versionSelected={versionSelected}
          setVersionSelected={setVersionSelected}
        />
      )}

      {pluginSelected !== null && versionSelected !== null && (
        <IsCompatibleWithCurrentMainDep plugin={versionSelected.value} />
      )}
    </>
  );
};

export default UpdatePlugin;
