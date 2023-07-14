import { PackageJSON } from 'query-registry';
import { Table } from 'reactstrap';

interface Props {
  dependencies: PackageJSON[];
}

const ListIncompatibleDependencies = ({ dependencies }: Props) => {
  if (!dependencies.length) {
    return <p>Toutes les dépendances sont compatibles</p>;
  }

  return (
    <Table borderless hover responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Dépendance</th>
          <th>Version</th>
          <th>Exigence React</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.map((dep, i) => (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{dep.name}</td>
            <td>{dep.version}</td>
            <td>{dep.peerDependencies.react}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListIncompatibleDependencies;
