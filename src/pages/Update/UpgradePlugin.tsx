import { useSelector } from 'react-redux';
import Section from '@/components/Common/Section';
import SelectMainDependency from '@/components/Setup/SelectMainDependency';
import CheckDepCompatibilityWithMainDep from '@/components/UpdatePlugin/CheckDepCompatibilityWithMainDep';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const UpgradePlugin = () => {
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);

  return (
    <div className="upgrade-plugin">
      <Section
        subtitle={
          <>
            SELECT <span className="fw-medium text-uppercase">{mainDependency}</span>’S PLUGIN TO HELP
          </>
        }
        title={
          <>
            <span className="fw-medium">PLUGIN</span> <span className="fw-light">UPGRADE</span>
          </>
        }
        description={
          <>
            <p>
              You will see if the plugin’s version is compatible with your{' '}
              <span className="fw-medium">{mainDependency}</span>’s version.
            </p>
            <p>You can select your main dependency here:</p>
            <SelectMainDependency />
          </>
        }>
        <CheckDepCompatibilityWithMainDep />
      </Section>
    </div>
  );
};

export default UpgradePlugin;
