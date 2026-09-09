import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import AllTasks from './assets/pages/alltasks/AllTasks.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='AllTasks' element={<AllTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
