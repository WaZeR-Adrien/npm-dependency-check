import { useMemo } from 'react';
import Select, { PropsValue } from 'react-select';

interface Props {
  dependencyNames: string[];
  handleChange: (option: PropsValue<any>) => void;
}

const SelectDependency = ({ dependencyNames, handleChange }: Props) => {
  const pluginOptions: PropsValue<any> = useMemo(
    () => dependencyNames.map((name) => ({ label: name, value: name })),
    [dependencyNames],
  );

  return (
    <Select
      className="mb-3"
      placeholder="Select the target dependency"
      options={pluginOptions}
      isClearable
      isSearchable
      onChange={handleChange}
    />
  );
};

export default SelectDependency;
