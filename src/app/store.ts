import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { loginSlice } from '../pages/auth/login/login-redux'


export function makeStore() {
  return configureStore({
    reducer: { loginState : loginSlice.reducer, userObject: loginSlice.reducer},
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
