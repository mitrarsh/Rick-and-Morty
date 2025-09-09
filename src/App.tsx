
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './layout/RootLayout';
import CharacterDetails from './pages/CharacterDetails';

function App() {

  const router= createBrowserRouter([
    {path:"/", element:<RootLayout/>, errorElement:<ErrorPage/>, children:[
      {index:true ,path:"/home", element: <HomePage/>},
      {index:true ,path:"/character-details", element: <CharacterDetails/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
