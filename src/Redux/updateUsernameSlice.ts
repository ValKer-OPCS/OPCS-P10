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
          body: JSON.stringify({ userName }),
        }
      )

      if (!response.ok) throw new Error()

      const data = await response.json()

      return { userName: data.body.userName }
    } catch {
      return rejectWithValue('Unable to update username')
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