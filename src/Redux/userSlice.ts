import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { updateUsername } from './updateUsernameSlice';
import type { NavigateFunction } from 'react-router-dom';
import { errorHandler } from '../Helper/errorHandler';



export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const fetchUserProfile = createAsyncThunk< User, { token: string; navigate: NavigateFunction }, { rejectValue: string } >(
  'user/fetchUserProfile',
  async ({ token, navigate }, {dispatch,  rejectWithValue }) => {
    try {
      
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();     

      if (!response.ok) {
        const statusCode = response.status;
        errorHandler(navigate, dispatch, statusCode);
        return rejectWithValue(data?.message || 'Unknown error');
      }

      return data.body as User;
    } catch {
      errorHandler(navigate, dispatch, 500);
      return rejectWithValue('Unable to fetch user profile');
    }
  }
);
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error occurred';
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        if (state.user) state.user.userName = action.payload.userName;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
