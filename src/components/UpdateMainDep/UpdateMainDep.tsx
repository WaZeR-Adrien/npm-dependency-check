import AsyncSelect from 'react-select/async';
import { getVersionOptionsFromPackage } from '@/utils/packages';
import ListIncompatibleDependencies from '@/components/UpdateMainDep/ListIncompatibleDependencies';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import { memo, useState } from 'react';
import { PropsValue } from 'react-select';
import useHighlightCurrentOption from '@/hooks/useHighlightCurrentOption';

interface Props {
  mainDependency: string;
}

const UpdateMainDep = memo(({ mainDependency }: Props) => {
  const currentVersion = useSelector((state) => packageLockSelectors.selectDependencyVersion(state, mainDependency));
  const [versionSelected, setVersionSelected] = useState<PropsValue<any>>(null);

  const formatOptions = useHighlightCurrentOption(currentVersion || '');

  const incompatibleDependencies = useSelector((state) =>
    packageLockSelectors.selectIncompatiblePlugins(state, versionSelected ? versionSelected.value.version : ''),
  );

  return (
    <>
      <AsyncSelect
        key={mainDependency}
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
    </>
  );
});

export default UpdateMainDep;
