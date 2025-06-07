import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  // The whole react application is rendered inside the root element
  // The root element is defined in the index.html file
  // The App component is the main component of the application
  // Browser router imported to allow moving from one page to other or route through multiple pages 
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
