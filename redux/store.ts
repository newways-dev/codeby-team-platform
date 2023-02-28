import { configureStore } from '@reduxjs/toolkit'
import menu from './mobileMenu/slice'
import user from './user/slice'
import modal from './modal/slice'

export const store = configureStore({
  reducer: {
    menu,
    user,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
