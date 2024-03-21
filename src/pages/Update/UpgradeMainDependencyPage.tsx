import { useSelector } from 'react-redux';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';
import Section from '@/components/Common/Section';
import SelectMainDependency from '@/components/Setup/SelectMainDependency';
import UpdateMainDep from '@/components/UpdateMainDep/UpdateMainDep';

const UpgradeMainDependencyPage = () => {
  const mainDependency = useSelector(mainDependencySelectors.selectDependency);

  return (
    <div className="upgrade-main-dep">
      <Section
        subtitle="SELECT VERSION TO FACILITATE"
        title={
          <>
            <span className="fw-medium text-uppercase">{mainDependency}</span> <span className="fw-light">UPGRADE</span>
          </>
        }
        description={
          <>
            <p>
              The incompatibles plugins of <span className="fw-medium">{mainDependency}</span> will be displayed to the
              right.
            </p>
            <p className="fst-italic">You can change the main dependency here:</p>
            <SelectMainDependency />
          </>
        }>
        <UpdateMainDep mainDependency={mainDependency} />
      </Section>
    </div>
  );
};

export default UpgradeMainDependencyPage;
