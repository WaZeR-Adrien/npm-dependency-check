import { configureStore } from '@reduxjs/toolkit';
import packageLockReducer from '@/store/slices/package-lock.slice';
import mainDependencyReducer from '@/store/slices/main-dependency.slice';

export const store = configureStore({
  reducer: {
    packageLock: packageLockReducer,
    mainDependency: mainDependencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
