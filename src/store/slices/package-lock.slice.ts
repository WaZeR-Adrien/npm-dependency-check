import { createSlice } from '@reduxjs/toolkit';
import { PackageJSON } from 'query-registry';

type PackageLockState = PackageJSON;

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
