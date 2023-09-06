import { configureStore } from '@reduxjs/toolkit'
import { jobSlice, userSlice, allJobsSlice } from './features'
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
