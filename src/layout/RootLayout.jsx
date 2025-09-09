import React from 'react'
import Header from './header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main>
      <Header/>
      <div className="p-[5rem]">
        <Outlet/>
      </div>
    </main>
  )
}

export default RootLayout