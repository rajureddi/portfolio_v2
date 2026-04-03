import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ResumePage from './pages/ResumePage.tsx'

const path = window.location.pathname;
const isResumeRoute = path === '/resume' || path === '/resume/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isResumeRoute ? <ResumePage /> : <App />}
  </StrictMode>,
)
