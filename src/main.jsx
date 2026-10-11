import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './pages/AppRouter.jsx'
import "./css/style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AppRouter />
  </StrictMode>,
)
