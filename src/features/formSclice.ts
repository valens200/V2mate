import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setFormInputs : (state, action : PayloadAction<object>) => {

    }
    
  },
})

export const {  } = counterSlice.actions
export const formReducer = counterSlice.reducer;