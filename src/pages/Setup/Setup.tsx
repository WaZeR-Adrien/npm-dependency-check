import Section from '@/components/Common/Section';
import SelectPackageLock from '@/components/Setup/SelectPackageLock';
import Button from '@/components/Common/Button';

const Setup = () => {
  return (
    <div className="setup">
      <Section
        subtitle="WELCOME TO"
        title={
          <>
            <span className="fw-medium">NPM</span> <span className="fw-light">Dependency Check</span>
          </>
        }
        description={
          <>
            <p>
              Upload your <span className="fw-medium">package-lock.json</span>{' '}
              <span className="setup__lockversion fw-light">(lockfileVersion {'>'} 1)</span>
              <br />
              And easily analyse your dependencies
            </p>
            <p className="fst-italic mb-4">Data are only stored in sessionStorage</p>
            <Button label="More information on GitHub" icon="logo-github" />
          </>
        }>
        <SelectPackageLock />
      </Section>
    </div>
  );
};

export default Setup;
