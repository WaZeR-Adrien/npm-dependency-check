import { createSlice } from '@reduxjs/toolkit';
import { PackageJSON } from 'query-registry';

export interface PackageLockState {
  name: string;
  version: string;
  lockfileVersion: number;
  requires: boolean;
  packages: Record<string, PackageJSON>;
}

type State = PackageLockState | null;

const initialState: State = null;

const slice = createSlice({
  name: 'packageLock',
  initialState: initialState as State,
  reducers: {
    set: (_, { payload }) => payload,
    reset: () => initialState,
  },
});

export const { set: setPackageLock, reset: resetPackageLock } = slice.actions;
export default slice.reducer;
