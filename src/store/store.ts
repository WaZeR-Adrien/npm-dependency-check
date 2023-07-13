import { configureStore } from '@reduxjs/toolkit';
import packageLockReducer from '@/store/slices/package-lock.slice';

export const store = configureStore({
  reducer: {
    packageLock: packageLockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
