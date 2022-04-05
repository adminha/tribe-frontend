import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../../app/store'

export interface userObject {
  isLoggedIn: boolean,
  userObject: {
    access_token: string,
    user: {
        firstName: string,
        lastName: string,
        username: string,
        frontTheme: boolean,
        createdAt: string,
        updtedAt: string
      },
    }
}
const initialState: userObject = {
  isLoggedIn: false,
  userObject: {
    access_token: "",
    user: {
      firstName: "",
      lastName: "",
      username: "",
      frontTheme: false,
      createdAt: "",
      updtedAt: ""
    }
  }
}
export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    changeLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    updateUserObject: (state, action: PayloadAction<any>) => {
      state.userObject = action.payload
    }
  },
})

export const { changeLoginStatus, updateUserObject } = loginSlice.actions

export const selectLoginStatus = (state: AppState) => state.loginState.isLoggedIn
export const selectUserObject = (state: AppState) => state.loginState.userObject

export default loginSlice.reducer
