
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './layout/RootLayout';
import CharacterDetails from './pages/CharacterDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const queryClient= new QueryClient()

  const router= createBrowserRouter([
    {path:"/", element:<RootLayout/>, errorElement:<ErrorPage/>, children:[
      {index:true , element: <HomePage/>},
      {path:"/character-details/:id", element: <CharacterDetails/>},
    ]}
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </>
  )
}

export default App
