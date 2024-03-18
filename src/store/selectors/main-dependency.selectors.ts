import { RootState } from '@/store/store';

const selectDependency = ({ mainDependency }: RootState): string | null => mainDependency;

export default {
  selectDependency,
};
