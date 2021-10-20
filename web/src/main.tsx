import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { AuthProvider } from './contexts/auth'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    {/* Todos os componentes da aplicação terão acesso às informações do usuário autenticado */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
