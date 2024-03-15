import { useSelector } from 'react-redux';
import packageFileSelectors from '@/store/selectors/package-lock.selectors';
import SelectPackageLock from '@/components/Setup/SelectPackageLock';
import SelectTool from '@/components/Setup/SelectTool';

const Setup = () => {
  const packageFile = useSelector(packageFileSelectors.selectFile);

  return (
    <div className="setup text-center">
      <h1 className="fw-light lh-1">Welcome</h1>
      <h2 className="lh-1 mb-4">
        <span className="fw-light">to</span> <span className="text-primary">NPM Dependency Check</span>
      </h2>
      {!packageFile && <SelectPackageLock />}
      {packageFile && <SelectTool />}
    </div>
  );
};

export default Setup;
