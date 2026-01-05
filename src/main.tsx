import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import userReducer  from './Stores/userStore.ts';

const store = configureStore({

  reducer: { user:userReducer },

})

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
    <App />
    </Provider>


  </StrictMode>,
)
