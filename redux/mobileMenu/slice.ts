import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuSliceState {
  openMenu: boolean
}

const initialState: MenuSliceState = {
  openMenu: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload
    },
  },
})

export const { setOpen } = menuSlice.actions

export default menuSlice.reducer
