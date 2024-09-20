import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './store/context.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faBook } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
)
