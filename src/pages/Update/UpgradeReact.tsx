import { useState } from 'react';
import { PropsValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import ListIncompatibleDependencies from '@/components/UpdateReact/ListIncompatibleDependencies';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import { getVersionOptionsFromPackage } from '@/utils/packages.ts';

const UpgradeReact = () => {
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const incompatibleDependencies = useSelector((state) =>
    packageLockSelectors.selectIncompatibleReactPlugins(state, versionSelected ? versionSelected.value.version : ''),
  );

  return (
    <div className="upgrade-react">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade</span> <span className="text-primary">React</span>
      </h2>

      <AsyncSelect
        className="mb-3"
        placeholder="Select the targeted React version"
        loadOptions={() => getVersionOptionsFromPackage('react')}
        isClearable
        isSearchable
        cacheOptions
        defaultOptions
        onChange={setVersionSelected}
      />

      {versionSelected !== null && <ListIncompatibleDependencies dependencies={incompatibleDependencies} />}
    </div>
  );
};

export default UpgradeReact;
