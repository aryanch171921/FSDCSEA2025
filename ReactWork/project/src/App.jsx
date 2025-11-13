import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Login from './component/Login' 
import Home from './component/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router> 
  )
}
export default App
