import Select, { PropsValue } from 'react-select';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import { getVersionOptionsFromPackage } from '@/utils/packages.ts';
import IsCompatibleWithCurrentReact from '@/components/UpdatePlugin/IsCompatibleWithCurrentReact.tsx';
import AsyncSelect from 'react-select/async';

const UpgradePlugin = () => {
  const [pluginSelected, setPluginSelected] = useState<PropsValue<any>>(null);
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const dependencyNames = useSelector(packageLockSelectors.selectReactPluginNames);
  const pluginOptions: PropsValue<any> = useMemo(
    () => dependencyNames.map((name) => ({ label: name, value: name })),
    [dependencyNames],
  );

  const handlePluginChange = (option: PropsValue<any>) => {
    setPluginSelected(option);
    setVersionSelected(null);
  };

  return (
    <div className="upgrade-plugin">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade React's</span> <span className="text-primary">plugin</span>
      </h2>

      <Select
        className="upgrade-plugin__select"
        placeholder="Select the targeted plugin"
        options={pluginOptions}
        isClearable
        isSearchable
        onChange={handlePluginChange}
      />

      {pluginSelected !== null && (
        <AsyncSelect
          key={pluginSelected.value}
          className="upgrade-plugin__select"
          placeholder="Select the targeted version"
          loadOptions={() => getVersionOptionsFromPackage(pluginSelected.value)}
          isClearable
          isSearchable
          cacheOptions
          defaultOptions
          onChange={setVersionSelected}
        />
      )}

      {pluginSelected !== null && versionSelected !== null && (
        <IsCompatibleWithCurrentReact plugin={versionSelected.value} />
      )}
    </div>
  );
};

export default UpgradePlugin;
