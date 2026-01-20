import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'


interface User {
  email: string
  password: string
  firstName: string
  lastName: string
  userName: string
}

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
}


export const fetchUserProfile = createAsyncThunk<User,string, { rejectValue: string }>('user/fetchUserProfile', 
    async (token, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) throw new Error()

    const data = await response.json()
    return data.body as User
  } catch {
    return rejectWithValue('Unable to fetch user profile')
  }
})

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Unknown error occured'
      })
  },
})

export const { clearUser } = userSlice.actions
export default userSlice.reducer
