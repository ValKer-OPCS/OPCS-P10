import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Error from './Pages/Errors/Error'
import SignIn from './Pages/SignIn/SignIn'
import Account from './Pages/Account/Account'
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
        <Route path="/signin" element={<SignIn />} />  
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>   
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
