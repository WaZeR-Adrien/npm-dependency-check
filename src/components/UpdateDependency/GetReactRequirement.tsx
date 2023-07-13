import packageService from '@/services/package.service';
import { useEffect, useState } from 'react';

interface Props {
  name: string;
  version: string;
}

const GetReactRequirement = ({ name, version }: Props) => {
  const [requirement, setRequirement] = useState('');

  useEffect(() => {
    packageService.getReactRequirement(name, version).then((res) => {
      if (res) {
        setRequirement(res);
      }
    });
  });

  return (
    <p>
      <b>{name}</b> require <b>react</b> {requirement}
    </p>
  );
};

export default GetReactRequirement;
