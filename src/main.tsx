import { ApolloProvider } from '@apollo/client/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { client } from './graphql/clients.tsx'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
    <App />
  </StrictMode>
  </ApolloProvider>,
)
