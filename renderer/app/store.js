import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from '../features/user'
export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    },
})