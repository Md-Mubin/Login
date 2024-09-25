import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: "",
  },
  reducers: {
    registerForm: (state, action) => {
      state.user = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerForm } = counterSlice.actions

export default counterSlice.reducer