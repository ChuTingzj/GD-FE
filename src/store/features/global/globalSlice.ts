import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
interface GlobalState {
  isReachBottom: boolean
}
const initialState: GlobalState = {
  isReachBottom: false,
}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeIsReachBottom: (state, action: { payload: boolean, type: string }) => {
      state.isReachBottom = action.payload
    }
  }
})
export const globalReducer = globalSlice.reducer
export const selectGlobal = (state: RootState) => state.global
export const { changeIsReachBottom } = globalSlice.actions