import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TipProvider } from './contexts/TipContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TipProvider>
      <App />
    </TipProvider>
  </React.StrictMode>
)
