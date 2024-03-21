import { useSelector } from 'react-redux';
import Section from '@/components/Common/Section';
import SelectMainDependency from '@/components/Setup/SelectMainDependency';
import UpdatePlugin from '@/components/UpdatePlugin/UpdatePlugin';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const UpgradePluginPage = () => {
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
        <UpdatePlugin />
      </Section>
    </div>
  );
};

export default UpgradePluginPage;
