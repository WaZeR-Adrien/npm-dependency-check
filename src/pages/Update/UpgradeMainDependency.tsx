import { useState } from 'react';
import { PropsValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import ListIncompatibleDependencies from '@/components/UpdateReact/ListIncompatibleDependencies';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import { getVersionOptionsFromPackage } from '@/utils/packages';
import useHighlightCurrentOption from '@/hooks/useHighlightCurrentOption';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const UpgradeMainDependency = () => {
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);
  const currentVersion = useSelector((state) => packageLockSelectors.selectDependencyVersion(state, mainDependency));
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const formatOptions = useHighlightCurrentOption(currentVersion || '');

  const incompatibleDependencies = useSelector((state) =>
    packageLockSelectors.selectIncompatiblePlugins(state, versionSelected ? versionSelected.value.version : ''),
  );

  return (
    <div className="upgrade-react">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade</span> <span className="text-primary">main dependency</span>
      </h2>

      <AsyncSelect
        className="mb-3"
        placeholder="Select the target version"
        loadOptions={() => getVersionOptionsFromPackage(mainDependency)}
        formatOptionLabel={formatOptions}
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

export default UpgradeMainDependency;
