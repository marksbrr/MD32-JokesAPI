import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: string,
}
const initialState: CounterState = {
  value: 'asd',
};
export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    jokesChange: (state, action:PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { jokesChange } = jokesSlice.actions;

export default jokesSlice.reducer;
