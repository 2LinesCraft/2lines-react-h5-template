import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  token: string
  userInfo: {
    name?: string
    avatar?: string
  }
}

const initialState: UserState = {
  token: '',
  userInfo: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    setUserInfo(state, action: PayloadAction<UserState['userInfo']>) {
      state.userInfo = action.payload
    },
    clearUser(state) {
      state.token = ''
      state.userInfo = {}
    },
  },
})

export const { setToken, setUserInfo, clearUser } = userSlice.actions
export default userSlice.reducer
