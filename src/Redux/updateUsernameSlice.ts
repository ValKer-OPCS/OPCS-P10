import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


interface UpdateUsernamePayload {
  userName: string;
}


interface UpdateUsernameResponse {
  userName: string;
}


interface UpdateUsernameThunkAPI {
  state: { auth: { token: string | null } };
  rejectValue: string;
}


export const updateUsername = createAsyncThunk<UpdateUsernameResponse, UpdateUsernamePayload, UpdateUsernameThunkAPI>('user/updateUsername',
  async ({ userName }, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    const trimmedUserName = userName.trim()

    if (!token) {
      return rejectWithValue('Not authenticated')
    }

    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userName: trimmedUserName }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          return rejectWithValue('Session expired. Please sign in again.')
        }
        return rejectWithValue('Unable to update username')
      }
      

      return { userName: data.body.userName }
    } catch {
      return rejectWithValue('Network error. Please try again.')
    }
  }
)

interface ModifyUserState {
  loading: boolean
  error: string | null
}

const initialState: ModifyUserState = {
  loading: false,
  error: null,
}

const modifyUserSlice = createSlice({
  name: 'modifyUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUsername.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Unknown error occurred'
      })
  },
})

export default modifyUserSlice.reducer