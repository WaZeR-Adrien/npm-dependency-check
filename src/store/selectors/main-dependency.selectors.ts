import { RootState } from '@/store/store';

const isSelected = ({ mainDependency }: RootState): boolean => !!mainDependency;
const selectDependency = ({ mainDependency }: RootState): string => mainDependency || '';

export default {
  isSelected,
  selectDependency,
};
