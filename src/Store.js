import { configureStore } from '@reduxjs/toolkit'
import MainSlices from './Slices/MainSlices'

export default configureStore({
  reducer: {
    counter: MainSlices,
  },
})