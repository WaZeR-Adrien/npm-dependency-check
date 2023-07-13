import { useEffect, useState } from 'react';
import { PackageJSON } from 'query-registry';
import Select, { PropsValue } from 'react-select';
import { coerce, satisfies } from 'semver';
import packageService from '@/services/package.service';
import ListIncompatibleDependencies from '@/components/UpdateReact/ListIncompatibleDependencies';

const ReactUpdate = () => {
  const [reactVersions, setReactVersions] = useState<PropsValue<any>>([]);
  const [dependencies, setDependencies] = useState<PackageJSON[]>([]);
  const [reactVersionSelected, setReactVersionSelected] = useState<PropsValue<any>>(null);

  useEffect(() => {
    packageService
      .getReactVersions()
      .then((versions) => versions.map((v) => ({ label: v, value: v })))
      .then(setReactVersions);
  }, []);

  const incompatibleDependencies = dependencies
    .filter(() => !!reactVersionSelected)
    .filter((dep) => dep.peerDependencies && dep.peerDependencies.react)
    .filter((dep) => {
      const reactRang = dep.peerDependencies.react;
      return !satisfies(coerce(reactVersionSelected.value) || '', reactRang);
    });

  return (
    <div className="react-update">
      <Select
        options={reactVersions}
        value={reactVersionSelected}
        isClearable
        isSearchable
        onChange={(option: PropsValue<any>) => setReactVersionSelected(option)}
      />

      {dependencies.length > 0 && reactVersionSelected !== null && (
        <ListIncompatibleDependencies dependencies={incompatibleDependencies} />
      )}
    </div>
  );
};

export default ReactUpdate;
