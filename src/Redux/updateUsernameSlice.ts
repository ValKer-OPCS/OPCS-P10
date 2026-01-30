import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { NavigateFunction } from 'react-router-dom';
import { errorHandler } from '../Helper/errorHandler';


export interface UpdateUsernamePayload {
  userName: string;
}

export interface UpdateUsernameResponse {
  userName: string;
}

interface UpdateUsernameThunkAPI {
  state: { auth: { token: string | null } };
  rejectValue: string;
}

interface ModifyUserState {
  loading: boolean;
  error: string | null;
}

export const updateUsername = createAsyncThunk< UpdateUsernameResponse, { userName: string; navigate: NavigateFunction }, UpdateUsernameThunkAPI>(
  'user/updateUsername',
  async ({ userName, navigate }, {dispatch, getState, rejectWithValue }) => {
    const token = getState().auth.token;
    const trimmedUserName = userName.trim();


    if (!token) {
      return rejectWithValue('Not authenticated');
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: trimmedUserName }),
      });

      const data = await response.json();

      if (!response.ok) {
        errorHandler(navigate, dispatch,  response.status,);
        return rejectWithValue(data?.message || 'Unable to update username');
      }

      return { userName: data.body.userName };
    } catch {
      errorHandler(navigate, dispatch, 500);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

const initialState: ModifyUserState = {
  loading: false,
  error: null,
};

const modifyUserSlice = createSlice({
  name: 'modifyUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUsername.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error occurred';
      });
  },
});

export default modifyUserSlice.reducer;
