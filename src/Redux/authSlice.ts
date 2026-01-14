import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { saveToken, loadToken, clearToken } from './authStorage'
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
}


const persistedToken = loadToken()

export const login = createAsyncThunk<string,LoginPayload,{ rejectValue: string }>('auth/login', 
    async (credentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) { throw new Error()}

    const data = await response.json()
    const token = data.body.token

    dispatch(fetchUserProfile(token))

    return data.body.token
  } catch {
    return rejectWithValue('Connexion error')
  }
})

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
          saveToken(action.payload)
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