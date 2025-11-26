import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";

import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import store from './Redux/store.ts';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <App />
        <Toaster position="top-right" richColors theme="system" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
</StrictMode>
)
