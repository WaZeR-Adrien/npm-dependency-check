import { RootState } from '@/store/store';

export default {
  selectFile: ({ packageLock }: RootState) => packageLock,
};
