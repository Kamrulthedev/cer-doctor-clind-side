import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Layout/Rootes'
import AuthProvideres from './Provides/AuthProvideres'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[940px] ml-10'>
    <React.StrictMode>
      <AuthProvideres>    <RouterProvider router={Routers}></RouterProvider></AuthProvideres>
    </React.StrictMode>,
  </div>
)
