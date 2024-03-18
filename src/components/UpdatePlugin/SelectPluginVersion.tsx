import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { PropsValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { getVersionOptionsFromPackage } from '@/utils/packages';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';
import useHighlightCurrentOption from '@/hooks/useHighlightCurrentOption';

interface Props {
  name: string;
  versionSelected: PropsValue<any>;
  setVersionSelected: Dispatch<any>;
}

const SelectPluginVersion = ({ name, versionSelected, setVersionSelected }: Props) => {
  const currentVersion = useSelector((state) => packageLockSelectors.selectDependencyVersion(state, name));
  const formatOptions = useHighlightCurrentOption(currentVersion || '');

  return (
    <AsyncSelect
      key={name}
      className="upgrade-plugin__select mb-3"
      placeholder="Select the target version"
      value={versionSelected}
      loadOptions={() => getVersionOptionsFromPackage(name)}
      formatOptionLabel={formatOptions}
      isClearable
      isSearchable
      cacheOptions
      defaultOptions
      onChange={setVersionSelected}
    />
  );
};

export default SelectPluginVersion;
