import { useEffect, useState } from 'react';
import Select, { PropsValue } from 'react-select';
import { coerce, compareBuild } from 'semver';
import packageService from '@/services/package.service';
import ListIncompatibleDependencies from '@/components/UpdateReact/ListIncompatibleDependencies';
import { useSelector } from 'react-redux';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';

const UpgradeReact = () => {
  const [reactVersions, setReactVersions] = useState<PropsValue<any>>([]);
  const [reactVersionSelected, setReactVersionSelected] = useState<PropsValue<any>>(null);

  const incompatibleDependencies = useSelector(
    packageLockSelectors.selectIncompatibleReactPlugins(reactVersionSelected ? reactVersionSelected.value : ''),
  );

  useEffect(() => {
    packageService
      .getPackageVersions('react')
      .then((versions) =>
        versions
          .map((v) => coerce(v).toString())
          .filter((v, i, all) => all.indexOf(v) === i)
          .sort((a, b) => compareBuild(b, a))
          .map((v) => ({ label: v, value: v })),
      )
      .then(setReactVersions);
  }, []);

  return (
    <div className="react-update">
      <h2 className="lh-1 mb-4 text-center">
        <span className="fw-light">Upgrade</span> <span className="text-primary">React</span>
      </h2>

      <Select
        options={reactVersions}
        value={reactVersionSelected}
        placeholder="Select the targeted React version"
        isClearable
        isSearchable
        onChange={(option: PropsValue<any>) => setReactVersionSelected(option)}
      />

      {reactVersionSelected !== null && <ListIncompatibleDependencies dependencies={incompatibleDependencies} />}
    </div>
  );
};

export default UpgradeReact;
