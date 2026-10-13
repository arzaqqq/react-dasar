import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




// Library untuk Route
// npm install react-router-dom 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Import page yang sudah dibuat

import Ref from './ref.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Ref/>
  </StrictMode>,
)
