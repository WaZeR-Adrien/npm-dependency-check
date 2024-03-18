import { PropsValue } from 'react-select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import IsCompatibleWithCurrentReact from '@/components/UpdatePlugin/IsCompatibleWithCurrentReact';
import SelectPluginVersion from '@/components/UpdatePlugin/SelectPluginVersion';
import SelectDependency from '@/components/Common/SelectDependency';

const UpgradePlugin = () => {
  const [pluginSelected, setPluginSelected] = useState<PropsValue<any>>(null);
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const dependencyNames = useSelector(packageLockSelectors.selectPluginNames);

  const handlePluginChange = (option: PropsValue<any>) => {
    setPluginSelected(option);
    setVersionSelected(null);
  };

  return (
    <div className="upgrade-plugin">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade React's</span> <span className="text-primary">plugin</span>
      </h2>

      <SelectDependency dependencyNames={dependencyNames} handleChange={handlePluginChange} />

      {pluginSelected !== null && (
        <SelectPluginVersion
          name={pluginSelected.value}
          versionSelected={versionSelected}
          setVersionSelected={setVersionSelected}
        />
      )}

      {pluginSelected !== null && versionSelected !== null && (
        <IsCompatibleWithCurrentReact plugin={versionSelected.value} />
      )}
    </div>
  );
};

export default UpgradePlugin;
