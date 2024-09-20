import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './store/context.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Film from './pages/Film.jsx';
import Books from './pages/Books.jsx';
import Commedy  from './pages/Commedy.jsx';
import Show from  './pages/Show.jsx';
import Modal from './components/Modal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  },
  {
    path:"/film",
    element: <Film></Film>
  },
  {
    path:"/film/:FilmSlug",
    element: <Show/>
  },
  {
    path:"/books",
    element: <Books></Books>
  },
  {
    path:"/books/:BooksSlug",
    element: <Show/>
  },
  {
    path:"/commedy",
    element: <Commedy></Commedy>,
    children:[
      {
        path: ":commedySlug",
        element: <Modal/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
)
