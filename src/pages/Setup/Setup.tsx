import SelectPackageLock from '@/components/Setup/SelectPackageLock';

const Setup = () => {
  return (
    <div className="setup text-center">
      <h1 className="fw-light lh-1">Welcome</h1>
      <h2 className="lh-1 mb-4">
        <span className="fw-light">to</span> <span className="text-primary">NPM Dependency Check</span>
      </h2>
      <SelectPackageLock />
    </div>
  );
};

export default Setup;
