import { PackageJSON } from 'query-registry';
import { Table } from 'reactstrap';
import CompatibilityResult from '@/components/Common/CompatibilityResult';

interface Props {
  mainDependency: string;
  dependencies: PackageJSON[];
}

const NPM_PACKAGE_URL = 'https://www.npmjs.com/package';

const ListIncompatibleDependencies = ({ mainDependency, dependencies }: Props) => {
  if (!dependencies.length) {
    return (
      <CompatibilityResult
        isCompatible
        compatibleDesc="Compatible with your dependencies"
        incompatibleDesc="Not compatible with your dependencies"
      />
    );
  }

  return (
    <Table borderless hover responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Dependency/Plugin</th>
          <th>Version</th>
          <th>Requirement</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.map((dep, i) => (
          <tr key={i}>
            <th>{i}</th>
            <td>
              <a href={`${NPM_PACKAGE_URL}/${dep.name}/v/${dep.version}`} target="_blank">
                {dep.name}
              </a>
            </td>
            <td>{dep.version}</td>
            <td>
              {dep.peerDependencies?.[mainDependency] ||
                dep.dependencies?.[mainDependency] ||
                dep.engines?.[mainDependency]}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListIncompatibleDependencies;
