import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ResumePage from './pages/ResumePage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'

const path = window.location.pathname;
const isResumeRoute = path === '/resume' || path === '/resume/';
const isProjectsRoute = path === '/projects' || path === '/projects/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isResumeRoute ? <ResumePage /> : isProjectsRoute ? <ProjectsPage /> : <App />}
  </StrictMode>,
)
