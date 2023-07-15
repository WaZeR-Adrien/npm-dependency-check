import { createSlice } from '@reduxjs/toolkit';
import { PackageJSON } from 'query-registry';

export interface PackageLockState {
  name: string;
  version: string;
  lockfileVersion: number;
  requires: boolean;
  packages: Record<string, PackageJSON>;
}

const initialState: PackageLockState | null = null;

const slice = createSlice({
  name: 'packageLock',
  initialState,
  reducers: {
    set: (_, { payload }) => payload,
    reset: () => initialState,
  },
});

export const { set, reset } = slice.actions;
export default slice.reducer;
