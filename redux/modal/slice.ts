import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalSliceState {
  openUpload: boolean
  createTeam: boolean
  joinTeam: boolean
  addIntoTeam: boolean
}

const initialState: ModalSliceState = {
  openUpload: false,
  createTeam: false,
  joinTeam: false,
  addIntoTeam: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setOpenUpload: (state, action: PayloadAction<boolean>) => {
      state.openUpload = action.payload
    },
    setCreateTeam: (state, action: PayloadAction<boolean>) => {
      state.createTeam = action.payload
    },
    setJoinTeam: (state, action: PayloadAction<boolean>) => {
      state.joinTeam = action.payload
    },
    setAddIntoTeam: (state, action: PayloadAction<boolean>) => {
      state.addIntoTeam = action.payload
    },
  },
})

export const { setOpenUpload, setCreateTeam, setJoinTeam, setAddIntoTeam } =
  modalSlice.actions

export default modalSlice.reducer
