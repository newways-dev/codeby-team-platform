import { RootState } from '../store'

export const selectOpenUpload = (state: RootState) => state.modal.openUpload
export const selectCreateTeam = (state: RootState) => state.modal.createTeam
export const selectJoinTeam = (state: RootState) => state.modal.joinTeam
export const selectAddIntoTeam = (state: RootState) => state.modal.addIntoTeam
