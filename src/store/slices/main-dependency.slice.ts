import { createSlice } from '@reduxjs/toolkit';

type State = string | null;

const initialState: State = null;

const slice = createSlice({
  name: 'mainDependency',
  initialState: initialState as State,
  reducers: {
    set: (_, { payload }) => payload,
    reset: () => initialState,
  },
});

export const { set: setMainDependency, reset: resetMainDependency } = slice.actions;
export default slice.reducer;
