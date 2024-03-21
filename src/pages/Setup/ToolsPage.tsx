import Section from '@/components/Common/Section';
import SelectMainDependency from '@/components/Setup/SelectMainDependency';
import SelectTool from '@/components/Setup/SelectTool';

const Setup = () => {
  return (
    <div className="tools">
      <Section
        subtitle="SELECT MAIN DEPENDENCY"
        title={
          <>
            <span className="fw-light">AND/OR</span> <span className="fw-medium">TOOL</span>
          </>
        }
        description={
          <>
            <p>Some tools require selecting a main dependency.</p>
            <p>You can select your main dependency here:</p>
            <SelectMainDependency />
          </>
        }>
        <SelectTool />
      </Section>
    </div>
  );
};

export default Setup;
