import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPages from './components/pages/login/LoginPages'
import OrderPages from './components/pages/order/OrderPages'
import ErrorPage from './components/pages/error/ErrorPage'

function App() {
  return <Routes>
    <Route path="/" element={<LoginPages />}/>
    <Route path="/order" element={<OrderPages />}/>
    <Route path="*" element={<ErrorPage />}/>
  </Routes>
}

export default App
