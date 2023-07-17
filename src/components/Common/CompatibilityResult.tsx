import IonIcon from '@reacticons/ionicons';

interface Props {
  isCompatible: boolean;
  compatibleDesc: string;
  incompatibleDesc: string;
  requirement?: string;
  yourVersion?: string;
}

const CompatibilityResult = ({ isCompatible, compatibleDesc, incompatibleDesc, requirement, yourVersion }: Props) => (
  <div className="compatibility-result text-center">
    {isCompatible ? (
      <>
        <IonIcon className="compatibility-result__icon text-success" name="checkmark-done-outline" size="large" />
        <p className="compatibility-result__description">{compatibleDesc}</p>
      </>
    ) : (
      <>
        <IonIcon className="compatibility-result__icon text-danger" name="close-outline" size="large" />
        <p className="compatibility-result__description">{incompatibleDesc}</p>
      </>
    )}
    {!!requirement && !!yourVersion && (
      <p className="compatibility-result__requirement fst-italic">
        Requirement: {requirement} / Yours: {yourVersion}
      </p>
    )}
  </div>
);

export default CompatibilityResult;
