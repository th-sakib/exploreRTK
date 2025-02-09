import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCounter = {
  value: number;
};

const initialState: TCounter = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByCustomNum: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(asyncIncrement.pending, () => {
        console.log("pending");
      })
      .addCase(
        asyncIncrement.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      ),
});

export const asyncIncrement = createAsyncThunk(
  "counter/asyncIncrement",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export default counterSlice.reducer;
export const { decrement, increment, incrementByCustomNum } =
  counterSlice.actions;
