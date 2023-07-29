// prettier-ignore
const useHighlightCurrentOption = (current: string) => ({ label }: any) =>
  (
    <div className={label === current ? 'text-primary fw-bold' : ''}>
      <div>{label}</div>
    </div>
  );

export default useHighlightCurrentOption;
