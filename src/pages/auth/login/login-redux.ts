import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../../app/store'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
      isLoggedIn: false,
      tribeAccessToken: ''
  },
  reducers: {
    changeLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    changeTribeAccessToken: (state, action: PayloadAction<boolean>) => {
        state.tribeAccessToken += action.payload
    }
  },
})

export const { changeLoginStatus, changeTribeAccessToken } = loginSlice.actions

export const selectLoginStatus = (state: AppState) => state.loginState.isLoggedIn
export const selectTribeAccessToken = (state: AppState) => state.loginState.tribeAccessToken

export default loginSlice.reducer
