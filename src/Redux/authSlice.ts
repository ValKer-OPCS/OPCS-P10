import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { saveToken, loadToken, clearToken, saveTempToken, clearTempToken } from './authStorage'
import { fetchUserProfile } from './userSlice'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

interface LoginPayload {
  email: string
  password: string
  rememberMe: boolean
}


const persistedToken = loadToken()

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const login = createAsyncThunk<string, LoginPayload, { rejectValue: string }>('auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {

    await delay(1000)

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })


      const data = await response.json()

      if (!response.ok) {
        if (
          data?.message === 'Error: User not found!' ||
          data?.message === 'Error: Password is invalid'
        ) {
          return rejectWithValue('Username and/or password incorrect')
        }

        return rejectWithValue(data?.message)
      }

      const token = data.body.token

      dispatch(fetchUserProfile(token))

      if (credentials.rememberMe) saveToken(token)

      return token
    } catch {
      return rejectWithValue('Network error, try again later')
    }
  }
)

const initialState: AuthState = {
  token: persistedToken,
  isAuthenticated: !!persistedToken,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      clearToken()
      clearTempToken()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false
          state.token = action.payload
          state.isAuthenticated = true
          saveTempToken(action.payload)
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Unknown error occured'
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer