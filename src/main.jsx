import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// Library untuk Route
// npm install react-router-dom 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Import page yang sudah dibuat
import Loginpage from './pages/LOGIN.JSX';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductPages from './pages/products.jsx';
import ProfilPages from './pages/profil.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>hai</div>,
    errorElement:<ErrorPage/> 
  },
  {
    path: "/login",
    element:<Loginpage/>
  },
  {
    path: "/register",
    element:<RegisterPage/>
  },
  {
    path: "/products",
    element:<ProductPages/>
  },
  {
    path: "/profile", 
    element:<ProfilPages/>
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
