import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Error from './Pages/Errors/Error'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UserAutoLoader from './Components/UserAutoLoader/UserAutoLoader'

import Header from './Containers/Header/Header'
import Footer from './Containers/Footer/Footer'


import './App.css'

function App() {


  return (
    <>
    <UserAutoLoader/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>   
        <Route path="error/:code" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
