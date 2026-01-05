import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Error from './Pages/Errors/Error'
import SignIn from './Pages/SignIn/SignIn'
import Account from './Pages/Account/Account'

import Header from './Containers/Header/Header'
import Footer from './Containers/Footer/Footer'


import './App.css'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />      
        <Route path="/account" element={<Account />} />    
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
