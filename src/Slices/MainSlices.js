import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {
      email: "",
      password: ""
    },
  },
  reducers: {
    registerForm: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerForm } = counterSlice.actions

export default counterSlice.reducer