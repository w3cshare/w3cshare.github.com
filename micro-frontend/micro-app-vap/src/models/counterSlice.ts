/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 16:06:47
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 16:06:49
 * @FilePath: /FullStack/micro-frontend/micro-app-vap/src/models/counterSlice.ts
 * @Description: --
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
