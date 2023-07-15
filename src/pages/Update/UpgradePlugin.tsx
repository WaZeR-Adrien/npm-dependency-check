import Select, { PropsValue } from 'react-select';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';

const UpgradePlugin = () => {
  const [pluginSelected, setPluginSelected] = useState<PropsValue<any>>(null);
  const dependencyNames = useSelector(packageLockSelectors.selectReactPluginNames);
  const pluginOptions: PropsValue<any> = useMemo(
    () => dependencyNames.map((name) => ({ label: name, value: name })),
    [dependencyNames],
  );

  return (
    <div className="react-update">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade React's</span> <span className="text-primary">plugin</span>
      </h2>

      <Select
        options={pluginOptions}
        value={pluginSelected}
        placeholder="Select the targeted React version"
        isClearable
        isSearchable
        onChange={(option: PropsValue<any>) => setPluginSelected(option)}
      />

      {pluginSelected !== null && <p>TODO</p>}
    </div>
  );
};

export default UpgradePlugin;
