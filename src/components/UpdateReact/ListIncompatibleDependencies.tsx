import { PackageJSON } from 'query-registry';
import { Table } from 'reactstrap';
import CompatibilityResult from '@/components/Common/CompatibilityResult.tsx';

interface Props {
  dependencies: PackageJSON[];
}

const ListIncompatibleDependencies = ({ dependencies }: Props) => {
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
          <th>React requirement</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.map((dep, i) => (
          <tr key={i}>
            <th>{i}</th>
            <td>{dep.name}</td>
            <td>{dep.version}</td>
            <td>{dep.peerDependencies?.react}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListIncompatibleDependencies;
