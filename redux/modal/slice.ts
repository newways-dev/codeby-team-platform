import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalSliceState {
  openModal: boolean
}

const initialState: ModalSliceState = {
  openModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload
    },
  },
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer
