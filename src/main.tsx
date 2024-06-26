import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './styles/TailwindCSS.css'
import  router  from './router.tsx';
import { SignInToken } from './components/context/SignInToken.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SignInToken>
    <RouterProvider router={router}/>
  </SignInToken>
)
