import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import authReducer from './Redux/authSlice.ts'
import userReducer from './Redux/userSlice.ts'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
    <App />
    </Provider>


  </StrictMode>,
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch